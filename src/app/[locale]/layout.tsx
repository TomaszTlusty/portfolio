import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { Theme } from "@radix-ui/themes";
import Footer from "@/components/base/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import ConsoleEasterEgg from "@/components/content/ConsoleEasterEgg";
import JsonLd from "@/components/base/JsonLd";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5fffa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(
    props: LayoutProps<'/[locale]'>
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const title = "Tomasz Tłusty – Full-Stack Developer & Hardware Maker";

  return {
    metadataBase: new URL("https://tlusty.dev"),
    title: {
      default: title,
      template: "%s | Tomasz Tłusty",
    },
    description: t('description'),
    creator: "Tomasz Tłusty",
    authors: [{ name: "Tomasz Tłusty", url: "https://tlusty.dev" }],
    keywords: locale === 'en'
        ? ["Tomasz Tłusty", "portfolio", "full-stack developer", "Next.js", "TypeScript", "ESP32", "PCB", "cybersecurity", "Poland developer"]
        : ["Tomasz Tłusty", "portfolio", "programista", "Next.js", "TypeScript", "ESP32", "PCB", "cyberbezpieczeństwo", "Polska"],

    alternates: {
      canonical: locale === 'pl' ? '/' : `/${locale}`,
      languages: {
        'pl-PL': '/',
        'en-US': '/en',
        'x-default': '/',
      },
    },

    openGraph: {
      title,
      description: t('ogDescription'),
      url: locale === 'pl' ? "https://tlusty.dev" : `https://tlusty.dev/${locale}`,
      siteName: "Tomasz Tłusty Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'en' ? "Tomasz Tłusty Portfolio" : "Portfolio Tomasz Tłusty",
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      alternateLocale: locale === 'en' ? 'pl_PL' : 'en_US',
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: t('twitterDescription'),
      images: ["/og-image.png"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    category: "technology",
  };
}

export default async function LocaleLayout(props: LayoutProps<'/[locale]'>) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
      <html
          lang={locale}
          className={`${jakartaSans.variable} h-full antialiased`}
          suppressHydrationWarning
      >
      <body className="min-h-full flex flex-col bg-mintcream text-black font-sans">
      <JsonLd />
      <NextIntlClientProvider messages={messages}>
        <Theme style={{ fontFamily: 'var(--font-jakarta-sans)' }}>
          <ConsoleEasterEgg />
          <GridPattern />
          {props.children}
          <Footer />
        </Theme>
      </NextIntlClientProvider>
      </body>
      </html>
  );
}