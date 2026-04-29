import Hero from "@/components/content/Hero";
import Experience from "@/components/content/Experience";
import Projects from "@/components/content/Projects";
import HackTimeSpend from "@/components/content/HackTimeSpend";
import TechStack from "@/components/content/TechStack";
import Navbar from "@/components/base/Header";
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <HackTimeSpend />
    </main>
  );
}
