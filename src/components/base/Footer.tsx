import React from 'react';
import IconsBar from "@/components/content/IconsBar";
import { links, linksEn } from "@/data/links";
import { LinksType } from "@/types/LinksType";
import UserLink from "@/components/ui/UserLink";
import { getLocale } from 'next-intl/server';

const Footer = async () => {
  const locale = await getLocale();
  const localizedLinks = locale === 'en' ? linksEn : links;

  return (
    <footer className="mx-auto w-full flex flex-row max-w-3xl mt-16 bg-mintcream/80 rounded-tr-3xl rounded-tl-3xl py-2 px-3 justify-between items-center">
      <div className="flex flex-row gap-2">
        {localizedLinks.map((item: LinksType) => (
          <UserLink
            href={item.href}
            title={item.title}
            icon={item.icon}
            key={item.title}
          />
        ))}
      </div>
      <div className="flex flex-row gap-2">
        <IconsBar />
      </div>
    </footer>
  );
};

export default Footer;
