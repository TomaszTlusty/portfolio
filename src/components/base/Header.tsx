"use client"

import React, { useState, useRef, useEffect } from "react"

import { TbTargetArrow } from "react-icons/tb"
import {LuBookOpen} from "react-icons/lu"
import { IoTerminalOutline } from "react-icons/io5"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import Link from "next/link";

type NavItem = {
    icon: React.ReactNode
    label: string
    href: string
}

const navItems: NavItem[] = [
    {
        icon: <LuBookOpen size={24} strokeWidth={1.25} />,
        label: "portfolio",
        href: "/",
    },
    {
        icon: <IoTerminalOutline size={24} strokeWidth={1.25}/>,
        label: "projekty",
        href: "/projects",
    },
    {
        icon: <TbTargetArrow size={24} strokeWidth={1.25} />,
        label: "o mnie",
        href: "/about",
    },
]


export function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)
    const navRef = useRef<HTMLElement>(null)
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMobileOpen(false)
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
            {/* Desktop Navbar */}
            <nav className="block relative">
                <div className="relative z-20 flex items-center justify-center bg-mintcream/90 rounded-3xl px-2 h-16">
                    <ul className="flex items-center gap-1">
                        {navItems.map(({ icon, label }, index) => (
                            <li
                                key={label}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    className={`relative flex flex-col items-center gap-1 px-5 py-2 rounded-lg focus-visible:outline-none transition-colors duration-200 ${
                                        hoveredIndex === index ? "text-black" : "text-black/40 hover:text-black focus:text-black"
                                    }`}
                                    href={navItems[index].href}
                                >
                                    <span aria-hidden="true">{icon}</span>
                                    <span className="text-[0.8rem] font-light tracking-widest ">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
