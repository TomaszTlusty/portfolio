import React from 'react';
import { getTranslations } from 'next-intl/server';

const AboutText = async () => {
  const t = await getTranslations('about');

  return (
    <section className="mx-auto w-full max-w-3xl mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-black">
        {t('title')}
      </h2>

      <p className="mt-6 font-medium leading-relaxed text-black">
        {t('p1')}
      </p>

      <p className="mt-6 font-medium leading-relaxed text-black">
        {t('p2')}
      </p>

      <p className="mt-6 font-medium leading-relaxed text-black">
        {t('p3')}<br />
        <span className="mt-2">{t('p3books')}</span>
      </p>
    </section>
  );
};

export default AboutText;
