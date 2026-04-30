'use client'

import React from 'react'
import { motion } from 'motion/react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

const LanguageBtn = () => {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    function toggleLocale() {
        router.replace(pathname, { locale: locale === 'pl' ? 'en' : 'pl' })
    }

    return (
        <div className="flex items-center ml-1">
            <div className="w-px h-5 bg-black/10 mx-2" />
            <div
                onClick={toggleLocale}
                className="relative flex items-center bg-white border border-black/10 rounded-3xl p-0.5 cursor-pointer"
            >
                <motion.div
                    className="absolute top-0.5 bottom-0.5 w-7 bg-black rounded-3xl"
                    animate={{ x: locale === 'en' ? 28 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
                {['PL', 'EN'].map((lang) => (
                    <span
                        key={lang}
                        className={`relative z-10 w-7 text-center text-[0.6rem] font-semibold tracking-widest py-0.5 transition-colors duration-200 select-none ${
                            locale === lang.toLowerCase() ? 'text-white' : 'text-black/35'
                        }`}
                    >
                    {lang}
                </span>
                ))}
            </div>
        </div>
    )
}

export default LanguageBtn