import { LanguageType } from "@/types/LanguageType";
import {
    SiTypescript,
    SiPython,
    SiCplusplus,
    SiNextdotjs,
    SiTailwindcss,
    SiAssemblyscript, SiPhp,
} from "react-icons/si";
import {FaJava} from "react-icons/fa";

export const languages: LanguageType[] = [
    {
        title: "TypeScript",
        icon: <SiTypescript className="text-xs" />,
    },
    {
        title: "Next.js",
        icon: <SiNextdotjs className="text-xs" />,
    },
    {
        title: "PHP",
        icon: <SiPhp className={"text-xs"}/>
    },
    {
        title: "Java 21+",
        icon: <FaJava className="text-xs" />,
    },
    {
        title: "Python",
        icon: <SiPython className="text-xs" />,
    },
    {
        title: "C++",
        icon: <SiCplusplus className="text-xs" />,
    },
    {
        title: "ASM",
        icon: <SiAssemblyscript className="text-xs" />,
    },
    {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="text-xs" />,
    },
];