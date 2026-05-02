import type { Metadata } from 'next';
import Navbar from "@/components/base/Header";
import { setRequestLocale } from 'next-intl/server';
import { getAlternates } from '@/lib/metadata';
import ContactInfo from "@/components/content/ContactInfo";

export async function generateMetadata(
  props: PageProps<'/[locale]/contact'>
): Promise<Metadata> {
  const { locale } = await props.params;
  return { alternates: getAlternates(locale, '/contact') };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactInfo/>
    </main>
  );
}
