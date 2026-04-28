import Hero from "@/components/content/Hero"
import Experience from "@/components/content/Experience";
import Projects from "@/components/content/Projects";
import HackTimeSpend from "@/components/content/HackTimeSpend";
import TechStack from "@/components/content/TechStack";
import Footer from "@/components/base/Footer";

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