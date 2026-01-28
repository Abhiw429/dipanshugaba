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
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12">

        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-4xl font-bold">{project.title}</h1>

          {/* EP (description) */}
          {project.description && (
            <p className="mt-2 italic text-gray-500">
              {project.description}
            </p>
          )}

          {/* IMAGE — MOBILE (centered, after title + EP) */}
          {project.coverArt?.url && (
            <div className="md:hidden flex justify-center mt-6">
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

          {/* SONG LIST — starts right after EP / image */}
          <div className="mt-8 space-y-4 max-w-xl">
            {songs.map((song) => (
              <Link
                key={song.slug}
                href={`/music/projects/${song.slug}`}
                className="flex items-center gap-4 border rounded-xl p-4 hover:bg-gray-50 transition"
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

        {/* RIGHT COLUMN — DESKTOP IMAGE (TRUE CENTER) */}
        {project.coverArt?.url && (
          <div className="hidden md:flex justify-center self-center">
            <Image
              src={project.coverArt.url}
              alt={project.coverArt.title || project.title}
              width={360}
              height={360}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
