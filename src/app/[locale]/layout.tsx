import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { Theme } from "@radix-ui/themes";
import Footer from "@/components/base/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500","700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
                                         params,
                                       }: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL("https://tlusty.vercel.app/"),
    title: {
      default: "Tomasz Tłusty – Portfolio",
      template: "%s | Tomasz Tłusty",
    },
    description: t('description'),
    creator: "Tomasz Tłusty",
    openGraph: {
      title: "Tomasz Tłusty – Portfolio",
      description: t('ogDescription'),
      url: "https://tlusty.vercel.app",
      siteName: "Tomasz Tłusty Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Portfolio Tomasz Tłusty",
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'pl_PL',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tomasz Tłusty – Portfolio",
      description: t('twitterDescription'),
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: { url: "/apple-touch-icon.png" },
      other: [
        { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
    },
  };
}

export default async function LocaleLayout({
                                             children,
                                             params,
                                           }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
      <html
          lang={locale}
          className={`${jakartaSans.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col bg-mintcream text-black font-sans">
      <NextIntlClientProvider messages={messages}>
        <Theme style={{ fontFamily: 'var(--font-jakarta-sans)' }}>
          <GridPattern />
          {children}
          <Footer />
        </Theme>
      </NextIntlClientProvider>
      </body>
      </html>
  );
}