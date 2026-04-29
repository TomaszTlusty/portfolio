import React from 'react';
import { languages } from "@/data/languages";
import { getTranslations } from 'next-intl/server';

const TechStack = async () => {
  const t = await getTranslations('techStack');

  return (
    <section className="mx-auto mt-16 w-full max-w-xl sm:max-w-3xl gap-4">
      <h2 className="font-bold text-2xl mx-4 sm:mx-0">{t('title')}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
        {languages.map((language) => (
          <div
            key={language.title}
            className="flex flex-row items-center gap-2 bg-mintcream/80 text-black/80 rounded-3xl py-0.5 px-3 hover:translate-x-1 hover:-translate-y-0.5 transition-all duration-300"
          >
            {language.icon}
            <h5>{language.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
