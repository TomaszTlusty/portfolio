import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import careerData from "@/data/career.json";
import educationData from "@/data/education.json";
import competitionData from "@/data/competition.json";
import { careerSchema, educationSchema } from "@/lib/schemas";
import Timeline from "./Timeline";

export default function Experience() {
  const career = careerSchema.parse(careerData).career;
  const education = educationSchema.parse(educationData).education;
  const competition  = careerSchema.parse(competitionData).career;

  return (
    <Tabs defaultValue="work" className={"w-full sm:max-w-3xl max-w-md sm:mx-auto mt-16"}>
      <TabsList className="mb-2 grid grid-cols-3">
        <TabsTrigger value="work">Doświadczenie</TabsTrigger>
        <TabsTrigger value="competition">Konkursy</TabsTrigger>
        <TabsTrigger value="education">Wykształcenie</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Timeline experience={career}></Timeline>
      </TabsContent>
      <TabsContent value="competition">
        <Timeline experience={competition}></Timeline>
      </TabsContent>
      <TabsContent value="education">
        <Timeline experience={education}></Timeline>
      </TabsContent>
    </Tabs>
  );
}
