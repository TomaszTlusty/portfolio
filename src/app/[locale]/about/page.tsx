import AboutText from "@/components/content/AboutText";
import TechStack from "@/components/content/TechStack";
import ContactInfo from "@/components/content/ContactInfo";
import Navbar from "@/components/base/Header";
import { setRequestLocale } from 'next-intl/server';

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutText />
      <ContactInfo />
      <TechStack />
    </main>
  );
}
