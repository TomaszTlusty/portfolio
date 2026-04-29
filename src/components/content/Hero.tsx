import Image from "next/image";
import IconsBar from "@/components/content/IconsBar";
import { links, linksEn } from "@/data/links";
import UserLink from "@/components/ui/UserLink";
import { LinksType } from "@/types/LinksType";
import { getTranslations, getLocale } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations('hero');
  const locale = await getLocale();
  const localizedLinks = locale === 'en' ? linksEn : links;

  return (
    <section className="hero w-full sm:max-w-3xl max-w-lg gap-6 mx-auto justify-center sm:items-center mt-8 flex flex-col-reverse sm:flex-row">
      <div className="sm:w-[50%] sm:max-w-[50%] flex flex-col mt-4 mx-auto sm:mr-auto sm:ml-4">
        <h1 className="text-3xl font-bold tracking-tight text-black">
          Tomasz Tłusty
        </h1>

        <h3 className="mt-2 text-sm font-semibold text-black">
          {t('role')}
        </h3>

        <p className="mt-4 font-medium leading-relaxed text-black sm:w-full max-w-xl">
          {t('tagline')}
        </p>

        <div className="flex flex-row mt-7.5 items-center gap-2">
          <div className="flex flex-row gap-2">
            <IconsBar />
          </div>

          {localizedLinks.map((item: LinksType) => (
            <UserLink
              href={item.href}
              title={item.title}
              icon={item.icon}
              key={item.title}
            />
          ))}
        </div>
      </div>
      <div className="sm:w-[50%] sm:max-w-[50%] items-center justify-center z-10">
        <Image
          src="/img/tlusty.webp"
          alt={t('selfieAlt')}
          width={310}
          height={250}
          loading="eager"
          className="rounded-3xl mx-auto sm:ml-auto sm:mr-4 hover:scale-105 transition-all duration-300"
        />
      </div>
    </section>
  );
}
