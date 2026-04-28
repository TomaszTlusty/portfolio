import AboutText from "@/components/content/AboutText";
import TechStack from "@/components/content/TechStack";

export default function Home(){
    return (
        <main className={"min-h-screen"}>
            <AboutText/>
            <TechStack/>
        </main>
    )
}