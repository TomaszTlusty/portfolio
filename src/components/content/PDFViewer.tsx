"use client"
import { useState, useRef, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

interface Props {
  file: string
}

export default function PDFViewer({ file }: Props) {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(entries => {
      setContainerWidth(entries[0].contentRect.width)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  function onLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  return (
    <div ref={containerRef} className="w-full">
      <Document
        key={file}
        file={file}
        onLoadSuccess={onLoadSuccess}
        loading={
          <div className="h-[80vh] flex items-center justify-center text-black/40 text-sm">
            Loading PDF…
          </div>
        }
        error={
          <div className="h-[80vh] flex items-center justify-center text-black/40 text-sm">
            Failed to load PDF.
          </div>
        }
      >
        {containerWidth > 0 && (
          <Page
            pageNumber={pageNumber}
            width={containerWidth}
            renderTextLayer
            renderAnnotationLayer
          />
        )}
      </Document>

      {numPages > 1 && (
        <div className="flex items-center justify-center gap-4 py-3 border-t border-black/10 text-sm text-black/60">
          <button
            onClick={() => setPageNumber(p => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="disabled:opacity-30 hover:text-black transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span>{pageNumber} / {numPages}</span>
          <button
            onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="disabled:opacity-30 hover:text-black transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
