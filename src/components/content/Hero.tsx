import IconsBar from "@/components/content/IconsBar";
import { links, linksEn } from "@/data/links";
import UserLink from "@/components/ui/UserLink";
import { LinksType } from "@/types/LinksType";
import { getTranslations, getLocale } from 'next-intl/server';
import HeroImage from '@/components/content/HeroImage';
import LanguageBtn from "@/components/base/LanguageBtn";

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

          <h3 className="mt-2 text-sm font-semibold text-black flex flex-row items-center gap-1">
            {t('role')}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" width="20" height="13" style={{ borderRadius: 2, border: '0.5px solid rgba(0,0,0,0.15)' }}>
              <rect width="16" height="5" fill="#fff"/>
              <rect y="5" width="16" height="5" fill="#dc143c"/>
            </svg>
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

          <div className="mt-5 flex items-center gap-3 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-black/60">
              {locale === 'en' ? 'Open to work' : 'Otwarty na oferty'}
            </span>

            <span className="sm:hidden">
              <LanguageBtn />
            </span>
          </div>
        </div>

        <div className="sm:w-[50%] sm:max-w-[50%] items-center justify-center z-10">
          <HeroImage alt={t('selfieAlt')} />
        </div>
      </section>
  );
}