"use client"
import { Download } from "lucide-react"
import { useState } from "react"

export default function CVBox() {
    const [lang, setLang] = useState<"en" | "pl">("en")
    const file = lang === "en" ? "cv_tomasz_tlusty_en_1.pdf" : "cv_tomasz_tlusty_pl_1.pdf"
    const dlName = lang === "en" ? "Tomasz_Tlusty_CV.pdf" : "Tomasz_Tlusty_CV_PL.pdf"

    return (
        <section className="w-full max-w-4xl mx-auto mt-16 px-4 pb-16">
            <div className="flex flex-col gap-6 items-center">

                <div className="flex flex-col gap-2 items-center text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-black">
                        Curriculum Vitae
                    </h1>
                </div>

                <div className="w-full rounded-3xl overflow-hidden border border-black/10 bg-white">

                    <div className="px-4 py-2.5 border-b border-black/10 flex items-center justify-between gap-3">
                        <div className="inline-flex rounded-full bg-black/5 p-0.5">
                            <button
                                onClick={() => setLang("en")}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                    lang === "en" ? "bg-black text-white shadow-sm" : "text-black/50 hover:text-black"
                                }`}
                            >
                                English
                            </button>
                            <button
                                onClick={() => setLang("pl")}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                    lang === "pl" ? "bg-black text-white shadow-sm" : "text-black/50 hover:text-black"
                                }`}
                            >
                                Polski
                            </button>
                        </div>

                        <a
                        href={`/${file}`}
                        download={dlName}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-black/50 hover:text-black transition-colors"
                        >
                        <Download className="w-3 h-3" />
                        {lang === "en" ? "Download" : "Pobierz"}
                    </a>
                </div>

                <iframe
                    src={`/${file}#toolbar=0&navpanes=0&view=FitH`}
                    className="w-full h-[80vh]"
                    title="CV Preview"
                    key={file}
                />
            </div>

        </div>
</section>
)
}