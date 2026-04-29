import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import careerDataPl from "@/data/career.json";
import careerDataEn from "@/data/career.en.json";
import educationDataPl from "@/data/education.json";
import educationDataEn from "@/data/education.en.json";
import competitionDataPl from "@/data/competition.json";
import competitionDataEn from "@/data/competition.en.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import Timeline from "./Timeline";
import { getTranslations, getLocale } from 'next-intl/server';

export default async function Experience() {
  const t = await getTranslations('experience');
  const locale = await getLocale();

  const careerRaw = locale === 'en' ? careerDataEn : careerDataPl;
  const educationRaw = locale === 'en' ? educationDataEn : educationDataPl;
  const competitionRaw = locale === 'en' ? competitionDataEn : competitionDataPl;

  const career = careerSchema.parse(careerRaw).career;
  const education = educationSchema.parse(educationRaw).education;
  const competition = careerSchema.parse(competitionRaw).career;

  return (
    <Tabs defaultValue="work" className="w-full max-w-3xl mx-auto mt-16 px-4 sm:px-0">
      <TabsList className="mb-2 grid grid-cols-3">
        <TabsTrigger value="work">{t('work')}</TabsTrigger>
        <TabsTrigger value="competition">{t('competition')}</TabsTrigger>
        <TabsTrigger value="education">{t('education')}</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={career} />
      </TabsContent>
      <TabsContent value="competition">
        <Timeline experience={competition} />
      </TabsContent>
      <TabsContent value="education">
        <Timeline experience={education} />
      </TabsContent>
    </Tabs>
  );
}
