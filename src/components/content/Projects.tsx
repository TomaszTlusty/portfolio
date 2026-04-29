import React from 'react';
import Image from "next/image";
import { ProjectsList, ProjectsListEn } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { FaGithub, FaLink } from "react-icons/fa6";
import UserLink from "@/components/ui/UserLink";
import { CiCircleMore } from "react-icons/ci";
import { getTranslations, getLocale } from 'next-intl/server';

const Projects = async () => {
  const t = await getTranslations('projects');
  const locale = await getLocale();
  const allProjects = locale === 'en' ? ProjectsListEn : ProjectsList;
  const filteredProjectsList = allProjects.slice(0, 2);

  return (
    <section className="mx-auto mt-16 w-full max-w-xl sm:max-w-3xl">
      <div className="flex flex-row items-center justify-between mb-8 mx-4 sm:mx-0">
        <h2 className="font-bold text-2xl">{t('title')}</h2>
        <Link
          href="/projects"
          className="text-sm hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-black text-black/75 transition-all duration-300"
        >
          <span className="sm:flex hidden">{t('seeMore')}</span>
          <CiCircleMore className="sm:hidden flex" size="32" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto sm:items-start items-center">
        {filteredProjectsList.map((project) => (
          <article className="sm:mx-auto ml-4 mr-4" key={project.title}>
            <Image
              src={project.href}
              alt="project img"
              width={300}
              height={250}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto rounded-3xl border border-gray-200 aspect-video object-cover hover:scale-105 transition-all duration-300"
            />
            <h4 className="font-semibold text-xl mt-2">{project.title}</h4>
            <p className="font-medium text-sm h-12 overflow-hidden">{project.description}</p>
            <div className="flex flex-row items-center gap-4 mt-2">
              <UserLink title="Github" href={project.github} icon={<FaGithub />} />
              <UserLink title="Link" href={project.demo} icon={<FaLink />} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
