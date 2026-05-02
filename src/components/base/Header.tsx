"use client"

import React, { useState, useRef, useEffect } from "react"
import { useTranslations} from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageBtn from "@/components/base/LanguageBtn";
import {FaBriefcase, FaCode, FaUser} from "react-icons/fa6";

type NavItemConfig = {
  icon: React.ReactNode
  labelKey: string
  href: string
}

const navItemsConfig: NavItemConfig[] = [
  { icon: <FaBriefcase size={24} strokeWidth={1.25} />, labelKey: "portfolio", href: "/" },
  { icon: <FaCode size={24} strokeWidth={1.25} />, labelKey: "projects", href: "/projects" },
  { icon: <FaUser size={24} strokeWidth={1.25} />, labelKey: "about", href: "/about" },
]

export function Navbar() {
  const t = useTranslations('nav');

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setHoveredIndex(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function handleMouseEnter(index: number) {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setHoveredIndex(index)
  }

  function handleMouseLeave() {
    hoverTimeout.current = setTimeout(() => {
      setHoveredIndex(null)
    }, 150)
  }



  return (
    <header ref={navRef} className="mx-auto mt-8 z-50 w-[100%-2rem] max-w-md">
      <nav className="block relative">
        <div className="relative z-20 flex items-center justify-center bg-mintcream/90 rounded-3xl px-2 h-16">
          <ul className="flex items-center gap-1">
            {navItemsConfig.map(({ icon, labelKey, href }, index) => (
              <li
                key={labelKey}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className={`relative flex flex-col items-center gap-1 px-5 py-2 rounded-lg focus-visible:outline-none transition-colors duration-200 ${
                    hoveredIndex === index
                      ? "text-black"
                      : "text-black/40 hover:text-black focus:text-black"
                  }`}
                  href={href}
                >
                  <span aria-hidden="true">{icon}</span>
                  <span className="text-center text-[0.7rem] font-light tracking-widest">
                    {t(labelKey as Parameters<typeof t>[0])}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <span className={"hidden sm:flex"}>
          <LanguageBtn/>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
