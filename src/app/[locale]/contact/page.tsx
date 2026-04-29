import Navbar from "@/components/base/Header";
import { setRequestLocale } from 'next-intl/server';

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
    </main>
  );
}
