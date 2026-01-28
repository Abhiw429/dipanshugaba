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
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-4xl font-bold">{project.title}</h1>

          {/* EP / Description */}
          {project.description && (
            <p className="italic text-gray-500">{project.description}</p>
          )}

          {/* Image — mobile only (comes AFTER title+EP) */}
          {project.coverArt?.url && (
            <div className="md:hidden">
              <Image
                src={project.coverArt.url}
                alt={project.coverArt.title || project.title}
                width={320}
                height={320}
                className="rounded-2xl shadow-lg aspect-square object-cover"
                priority
              />
            </div>
          )}

          {/* Songs */}
          <div className="space-y-3 pt-2">
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
                    width={56}
                    height={56}
                    className="rounded-md object-cover"
                  />
                )}

                <h3 className="font-medium">{song.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE — desktop only, vertically centered */}
        {project.coverArt?.url && (
          <div className="hidden md:flex justify-end items-center">
            <Image
              src={project.coverArt.url}
              alt={project.coverArt.title || project.title}
              width={340}
              height={340}
              className="rounded-2xl shadow-lg aspect-square object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
