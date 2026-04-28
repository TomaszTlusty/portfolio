import React from 'react';
import Image from "next/image";
import {ProjectsList} from "@/data/projects";
import {FaGithub, FaLink} from "react-icons/fa6";
import UserLink from "@/components/ui/UserLink";


const Projects = () => {
    return (
        <section className={"mx-auto mt-16 w-full max-w-xl sm:max-w-3xl"}>
            <div className="flex flex-row items-center justify-between mb-8 ml-4 mr-4">
                <h1 className={"font-bold text-2xl text-center"}>Projekty</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto sm:items-start items-center">
                {ProjectsList.map((project) => (
                    <article className={"sm:mx-auto ml-4 mr-4"} key={project.title}>
                        <Image
                            src={project.href}
                            alt={"project img"}
                            width={300}
                            height={250}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={"w-full h-auto rounded-3xl border border-gray-200 aspect-video object-cover hover:scale-105 transition-all duration-300"}
                        />
                        <h4 className={"font-semibold text-xl mt-2"}>{project.title}</h4>

                        <p className={"font-medium text-sm h-12 overflow-hidden"}>{project.description}</p>

                        <div className={"flex flex-row items-center gap-4 mt-2"}>
                            <UserLink title={"Github"} href={project.github} icon={<FaGithub />} />
                            <UserLink title={"Link"} href={project.demo} icon={<FaLink />} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;