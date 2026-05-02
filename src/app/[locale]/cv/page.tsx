import type { Metadata } from 'next';
import Navbar from "@/components/base/Header";
import { setRequestLocale } from 'next-intl/server';
import CVBox from '@/components/content/CVBox';
import { getAlternates } from '@/lib/metadata';

export async function generateMetadata(
  props: PageProps<'/[locale]/cv'>
): Promise<Metadata> {
  const { locale } = await props.params;
  return { alternates: getAlternates(locale, '/cv') };
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
            <CVBox/>
        </main>
    );
}
