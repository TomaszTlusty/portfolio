import type { Metadata } from 'next';
import ProjectsBox from "@/components/content/ProjectsBox";
import Navbar from "@/components/base/Header";
import { setRequestLocale } from 'next-intl/server';
import { getAlternates } from '@/lib/metadata';

export async function generateMetadata(
  props: PageProps<'/[locale]/projects'>
): Promise<Metadata> {
  const { locale } = await props.params;
  return { alternates: getAlternates(locale, '/projects') };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectsBox />
    </main>
  );
}
