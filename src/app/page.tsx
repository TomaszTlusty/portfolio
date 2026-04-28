import Hero from "@/components/content/Hero"
import Experience from "@/components/content/Experience";
import Projects from "@/components/content/Projects";
import HackTimeSpend from "@/components/content/HackTimeSpend";
import TechStack from "@/components/content/TechStack";

export default function Home(){
  return (
      <main className={"min-h-screen"}>
          <Hero/>
          <Experience/>
          <Projects/>
          <TechStack/>
          <HackTimeSpend/>
      </main>
  )
}