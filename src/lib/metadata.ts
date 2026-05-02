import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';

const BASE = 'https://tlusty.dev';

export function getAlternates(locale: string, href: string): Metadata['alternates'] {
  const plPath = getPathname({ locale: 'pl', href });
  const enPath = getPathname({ locale: 'en', href });
  const canonical = locale === 'pl' ? plPath : enPath;

  return {
    canonical: `${BASE}${canonical}`,
    languages: {
      'pl-PL': `${BASE}${plPath}`,
      'en-US': `${BASE}${enPath}`,
      'x-default': `${BASE}${plPath}`,
    },
  };
}
