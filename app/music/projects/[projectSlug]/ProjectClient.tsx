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
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT COLUMN */}
        <div className="space-y-5">
          {/* Title */}
          <h1 className="text-4xl font-bold">{project.title}</h1>

          {/* EP */}
          {project.description && (
            <p className="italic text-gray-500">{project.description}</p>
          )}

          {/* Image — MOBILE ONLY (centered) */}
          {project.coverArt?.url && (
            <div className="md:hidden flex justify-center pt-2">
              <Image
                src={project.coverArt.url}
                alt={project.coverArt.title || project.title}
                width={280}
                height={280}
                className="rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>
          )}

          {/* Songs — close to EP */}
          <div className="space-y-3 pt-1">
            {songs.map((song) => (
              <Link
                key={song.slug}
                href={`/music/projects/${song.slug}`}
                className="flex items-center gap-4 border rounded-xl p-4 hover:bg-gray-50 transition max-w-xl"
              >
                {song.coverArt && (
                  <Image
                    src={song.coverArt}
                    alt={song.title}
                    width={52}
                    height={52}
                    className="rounded-md object-cover"
                  />
                )}
                <span className="font-medium">{song.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE — DESKTOP ONLY (centered vertically) */}
        {project.coverArt?.url && (
          <div className="hidden md:flex justify-center items-center">
            <Image
              src={project.coverArt.url}
              alt={project.coverArt.title || project.title}
              width={340}
              height={340}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
