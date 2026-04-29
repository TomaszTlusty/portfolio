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
        <div className="items-center ml-1 hidden sm:flex">
            <div className="w-px h-7 bg-black/10 mx-3" />
            <div
                onClick={toggleLocale}
                className="relative flex items-center bg-white border border-black/10 rounded-3xl p-[3px] cursor-pointer"
            >
                <motion.div
                    className="absolute top-[3px] bottom-[3px] w-[40px] bg-black rounded-3xl"
                    animate={{ x: locale === 'en' ? 40 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
                {['PL', 'EN'].map((lang) => (
                    <span
                        key={lang}
                        className={`relative z-10 w-[40px] text-center text-[0.7rem] font-semibold tracking-widest py-1 transition-colors duration-200 select-none ${
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