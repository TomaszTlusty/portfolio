"use client";
import Image from "next/image";

export default function HeroImage({ alt }: { alt: string }) {
  return (
    <div className="group perspective-[1000px] w-77.5 h-92.5 mx-auto sm:ml-auto sm:mr-4 cursor-pointer">
      <div className="relative w-full h-full transform-3d transition-transform duration-600 ease-[cubic-bezier(0.4,0.2,0.2,1)] group-hover:transform-[rotateY(180deg)]">
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden">
          <Image
            src="/img/tlusty.webp"
            alt={alt}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)] rounded-3xl  bg-black flex flex-col items-center justify-center gap-5 px-8 text-center">
          <div className="w-12 h-px bg-neutral-300" />
          <p className="text-[15px] leading-relaxed  text-white">
            &#34; Perfekcja to proces, nie cel. &#34;
          </p>
          <div className="w-12 h-px bg-neutral-300" />
          <p className="text-[11px] tracking-widest text-white uppercase">
            Tomasz
          </p>
        </div>
      </div>
    </div>
  );
}
