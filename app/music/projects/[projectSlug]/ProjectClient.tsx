"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  project: {
    title: string;
    description?: string;
  };
  songs: {
    title: string;
    slug: string;
    coverArt?: string | null;
  }[];
};

export default function ProjectClient({ project, songs }: Props) {
  return (
    <section className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        {project.description && (
          <p className="text-gray-500 mt-2">{project.description}</p>
        )}
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {songs.map((song) => (
          <Link
            key={song.slug}
            href={`/music/projects/pyaaj-malaai/${song.slug}`}
            className="flex gap-4 border rounded-xl p-4 hover:bg-gray-50"
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
