import { notFound } from "next/navigation";
import { getProjectBySlug, getSongsByProject } from "@/lib/contentful";
import ProjectClient from "./ProjectClient";

type PageProps = {
  params: {
    projectSlug: string;
  };
};

export default async function ProjectPage({ params }: PageProps) {
  const projectEntry = await getProjectBySlug(params.projectSlug);

  if (!projectEntry) {
    notFound();
  }

  const songs = await getSongsByProject(projectEntry.sys.id);

  // ✅ NORMALIZE PROJECT DATA
  const project = {
    title: projectEntry.fields.title as string,
    description: projectEntry.fields.description as string | undefined,
    coverArt:
      projectEntry.fields.coverart?.fields?.file?.url
        ? {
            url: "https:" + projectEntry.fields.coverart.fields.file.url,
            title:
              typeof projectEntry.fields.coverart.fields.title === "string"
                ? projectEntry.fields.coverart.fields.title
                : undefined,
          }
        : undefined,
  };

  return <ProjectClient project={project} songs={songs} />;
}
