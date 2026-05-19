"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { useTranslations } from "next-intl";

type Stats = {
  total: string | null;
  topLang: string | null;
  topProject: string | null;
};

export default function HeroImage({ alt }: { alt: string }) {
  const t = useTranslations("heroImage");
  const [stats, setStats] = useState<Stats>({
    total: null,
    topLang: null,
    topProject: null,
  });

  useEffect(() => {
    fetch("/api/hackatime")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  return (
    <div className="group [perspective:1000px] w-[310px] h-[370px] mx-auto sm:ml-auto sm:mr-4 cursor-pointer">
      <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0.2,0.2,1)] group-hover:[transform:rotateY(180deg)]">
        {/* PRZÓD */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden">
          <Image
            src="/img/tlusty.webp"
            alt={alt}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden  bg-neutral-900 border border-neutral-800 flex flex-col p-7">
          <Image
            src="/img/fox-celebrating-success.svg"
            alt="fox celebrating success"
            width={200}
            height={200}
            className="w-94 h-94 mb-4 absolute -z-10 bottom-0 opacity-10"
          />

          <p className="text-[22px] font-bold  text-white tracking-tight mb-1">
            Tomasz Tłusty
          </p>
          <p className="text-[10px] text-neutral-300 tracking-wide mb-6">
            Fullstack · Hardware · Security
          </p>

          {stats.total && (
            <div className="mb-4">
              <p className="text-[10px] text-neutral-300 uppercase tracking-widest mb-1">
                {t("code")}
              </p>
              <p className="text-[14px] font-medium text-white">
                {stats.total}
              </p>
            </div>
          )}

          {stats.topLang && (
            <div className="mb-4">
              <p className="text-[10px] text-neutral-300 uppercase tracking-widest mb-1">
                {t("toplanguage")}
              </p>
              <p className="text-[13px] text-neutral-200">{stats.topLang}</p>
            </div>
          )}

          {stats.topProject && (
            <div className="mb-4">
              <p className="text-[10px] text-neutral-300 uppercase tracking-widest mb-1">
                {t("topproject")}
              </p>
              <p className="text-[13px] text-neutral-200 truncate">
                {stats.topProject}
              </p>
            </div>
          )}

          <div className="mt-auto border-t border-neutral-800 pt-4 flex items-center justify-between">
            <Link
              href="https://hackatime.hackclub.com/@Tlusty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-neutral-400 hover:text-mintcream/80 transition-colors tracking-widest flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              Hackatime <FaLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
