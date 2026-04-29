"use client"

import React, { useState, useRef, useEffect } from "react"
import { TbTargetArrow } from "react-icons/tb"
import { LuBookOpen } from "react-icons/lu"
import { IoTerminalOutline } from "react-icons/io5"
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';

type NavItemConfig = {
  icon: React.ReactNode
  labelKey: string
  href: string
}

const navItemsConfig: NavItemConfig[] = [
  { icon: <LuBookOpen size={24} strokeWidth={1.25} />, labelKey: "portfolio", href: "/" },
  { icon: <IoTerminalOutline size={24} strokeWidth={1.25} />, labelKey: "projects", href: "/projects" },
  { icon: <TbTargetArrow size={24} strokeWidth={1.25} />, labelKey: "about", href: "/about" },
]

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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

  function toggleLocale() {
    router.replace(pathname, { locale: locale === 'pl' ? 'en' : 'pl' });
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
                  <span className="text-[0.8rem] font-light tracking-widest">
                    {t(labelKey as Parameters<typeof t>[0])}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLocale}
            className="ml-3 text-[0.75rem] font-semibold tracking-widest text-black/40 hover:text-black transition-colors duration-200 px-2 py-1 rounded-lg"
            title={locale === 'pl' ? 'Switch to English' : 'Przełącz na polski'}
          >
            {locale === 'pl' ? 'EN' : 'PL'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
