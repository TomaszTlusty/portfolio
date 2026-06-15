import { LanguageType } from "@/types/LanguageType";
import {
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiWordpress,
  SiGit,
  SiLinux,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const languages: LanguageType[] = [
  {
    title: "Next.js",
    icon: <SiNextdotjs className="text-xs" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="text-xs" />,
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
    title: "Wordpress",
    icon: <SiWordpress className="text-xs" />,
  },
  {
    title: "Git",
    icon: <SiGit className="text-xs" />,
  },
  {
    title: "Linux",
    icon: <SiLinux className="text-xs" />,
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className="text-xs" />,
  },
];
