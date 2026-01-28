import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/contentful";

type Props = {
  params: {
    projectSlug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.projectSlug);

  if (!project) notFound();

  return (
    <section className="max-w-5xl mx-auto space-y-10">
      {/* Project header */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {project.coverArt && (
          <Image
            src={project.coverArt.url}
            alt={project.coverArt.title || project.title}
            width={260}
            height={260}
            className="rounded-2xl"
            priority
          />
        )}

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>

          {project.description && (
            <p className="text-sm text-gray-600 max-w-xl">
              {project.description}
            </p>
          )}

          {project.status === "ongoing" && (
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-red-200 bg-red-50 text-red-600">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              Ongoing project
            </span>
          )}
        </div>
      </div>

      {/* Tracklist */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Tracklist</h2>

        <ul className="divide-y border rounded-xl overflow-hidden">
          {project.tracks.map((track, index) => (
            <li key={track.slug}>
              <Link
                href={`/music/projects/${params.projectSlug}/${track.slug}`}
                className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-medium">{track.title}</span>
                </div>

                <span className="text-xs text-gray-400">
                  {track.type || "Track"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
