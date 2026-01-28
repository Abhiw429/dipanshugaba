import { notFound } from "next/navigation";
import { getProjectBySlug, getSongsByProject } from "@/lib/contentful";
import ProjectClient from "./ProjectClient";

export default async function ProjectPage({
  params,
}: {
  params: { projectSlug: string };
}) {
  const projectEntry = await getProjectBySlug(params.projectSlug);
  if (!projectEntry) notFound();

  const songs = await getSongsByProject(projectEntry.sys.id);

  return (
    <ProjectClient
      project={{
        title: projectEntry.fields.title,
        description: projectEntry.fields.description,
      }}
      songs={songs}
    />
  );
}
