"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  project: {
    title: string;
    description?: string;
    coverArt?: {
      url: string;
      title?: string;
    };
  };
  songs: {
    title: string;
    slug: string;
    coverArt?: string;
  }[];
};

export default function ProjectClient({ project, songs }: Props) {
  return (
    <section className="space-y-10 max-w-5xl mx-auto">

      <header className="space-y-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        {project.description && (
          <p className="text-gray-500 italic">
            {project.description}
          </p>
        )}

        {project.coverArt?.url && (
          <Image
            src={project.coverArt.url}
            alt={project.coverArt.title || project.title}
            width={260}
            height={260}
            className="rounded-2xl"
          />
        )}
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {songs.map((song) => (
          <Link
            key={song.slug}
            href={`/music/projects/${project.title
              .toLowerCase()
              .replace(/\s+/g, "-")}/${song.slug}`}
            className="flex gap-4 border rounded-xl p-4 hover:bg-gray-50 transition"
          >
            {song.coverArt && (
              <Image
                src={song.coverArt}
                alt={song.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
            )}
            <div>
              <h3 className="font-semibold">{song.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
