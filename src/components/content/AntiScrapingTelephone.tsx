"use client"
import { useState } from "react"

export default function AntiScrapingTelephone() {
    const [revealed, setRevealed] = useState(false)

    return revealed ? (
        <a href="tel:+48576715143" className="text-sm font-medium text-black/60 hover:text-black transition-colors">
            +48 576 715 143
        </a>
    ) : (
        <button
            onClick={() => setRevealed(true)}
            className="text-sm font-medium text-black/60 hover:text-black transition-colors"
        >
            Show phone
        </button>
    )
}