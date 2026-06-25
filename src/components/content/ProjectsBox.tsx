import { ProjectsList, ProjectsListEn } from "@/data/projects";
import { getTranslations, getLocale } from "next-intl/server";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsBox = async () => {
  const t = await getTranslations("projects");
  const locale = await getLocale();
  const projects = locale === "en" ? ProjectsListEn : ProjectsList;

  return (
    <ProjectsGrid
      projects={projects}
      labels={{
        title: t("title"),
        allFilter: t("filterBtn"),
      }}
    />
  );
};

export default ProjectsBox;
