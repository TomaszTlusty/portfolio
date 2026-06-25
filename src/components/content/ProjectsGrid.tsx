"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa6";
import UserLink from "@/components/ui/UserLink";
import { Tag } from "@/types/ProjectsType";
import type { ProjectType } from "@/types/ProjectsType";

type ProjectsGridProps = {
  projects: ProjectType[];
  labels: {
    title: string;
    allFilter: string;
  };
};

const buttonBase =
  "py-0.5 px-3 mx-1 cursor-pointer font-semibold rounded-full transition-all duration-300 hover:translate-x-0.5 hover:-translate-y-1";

const ProjectsGrid = ({ projects, labels }: ProjectsGridProps) => {
  const [activeFilter, setActiveFilter] = useState<Tag | "all">("all");
  const filterButtons = Object.values(Tag);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tag?.includes(activeFilter));

  return (
    <section className="mx-auto mt-16 w-full max-w-xl sm:max-w-3xl">
      <div className="flex flex-row items-center mb-8 w-full max-w-3xl mt-16 px-4 sm:px-0">
        <h1 className="font-bold text-2xl">{labels.title}</h1>
      </div>

      <div className="px-4 sm:px-0 mb-8">
        <button
          onClick={() => setActiveFilter("all")}
          className={`${buttonBase} ${
            activeFilter === "all"
              ? "bg-mintcream text-black"
              : "bg-mintcream/80 hover:bg-mintcream"
          }`}
        >
          {labels.allFilter}
        </button>

        {filterButtons.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`${buttonBase} ${
              activeFilter === tag
                ? "bg-mintcream text-black"
                : "bg-mintcream/80 hover:bg-mintcream"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto sm:items-start items-center">
        {filteredProjects.map((project) => (
          <article className="sm:mx-auto ml-4 mr-4" key={project.title}>
            <Image
              src={project.href}
              alt={project.title}
              width={300}
              height={250}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-3xl border border-gray-200 aspect-video object-cover hover:scale-105 transition-all duration-300"
            />
            <h4 className="font-semibold text-xl mt-2">{project.title}</h4>
            <p className="font-medium text-sm h-12 overflow-hidden">
              {project.description}
            </p>
            <div className="flex flex-row items-center gap-4 mt-2">
              <UserLink
                title="Github"
                href={project.github}
                icon={<FaGithub />}
              />
              {project.demo !== "false" && (
                <UserLink title="Link" href={project.demo} icon={<FaLink />} />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
