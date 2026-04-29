import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { Theme } from "@radix-ui/themes";
import Footer from "@/components/base/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Space_Grotesk } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    authors: [{ name: "Tomasz Tłusty" }],
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
      icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mintcream text-black">
        <NextIntlClientProvider messages={messages}>
          <Theme>
            <GridPattern />
            {children}
            <Footer />
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
