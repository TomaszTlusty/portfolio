import React from 'react';
import { getTranslations } from 'next-intl/server';

const ContactInfo = async () => {
  const t = await getTranslations('contact');

  return (
    <section className="mx-auto w-full max-w-3xl mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-black">
        {t('title')}
      </h2>
      <ol className="mt-6 font-medium leading-relaxed text-black">
        <ul className="select-none mt-2">
          {t('phone')} <span className="select-text">+48 576 715 143</span>
        </ul>
        <ul className="select-none mt-2">
          {t('email')} <span className="select-text">tomek.tlustyxd@gmail.com</span>
        </ul>
        <ul></ul>
      </ol>
    </section>
  );
};

export default ContactInfo;
