import { notFound } from "next/navigation";
import type { Asset } from "contentful";

import {
  getProjectBySlug,
  getSongsByProject,
} from "../../../../lib/contentful";

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

  // ✅ normalize cover art safely
  const coverAsset = projectEntry.fields.coverart as Asset | undefined;

  const project = {
    title: projectEntry.fields.title as string,
    description: projectEntry.fields.description as string | undefined,
    coverArt: coverAsset?.fields?.file?.url
      ? {
          url: "https:" + coverAsset.fields.file.url,
          title:
            typeof coverAsset.fields.title === "string"
              ? coverAsset.fields.title
              : undefined,
        }
      : undefined,
  };

  return <ProjectClient project={project} songs={songs} />;
}
