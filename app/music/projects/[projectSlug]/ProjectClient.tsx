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
    <section className="max-w-6xl mx-auto space-y-12">
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>

          <span className="text-sm text-gray-500 italic">EP</span>

          {project.description && (
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        {/* RIGHT — COVER IMAGE */}
        {project.coverArt?.url && (
          <div className="flex justify-end">
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
      </div>

      {/* TRACKLIST */}
      <div className="space-y-4">
        {songs.map((song, index) => (
          <Link
            key={song.slug}
            href={`/music/projects/${project.title
              .toLowerCase()
              .replace(/\s+/g, "-")}/${song.slug}`}
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-gray-50 transition"
          >
            {/* Track number */}
            <span className="w-6 text-sm text-gray-400">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Cover */}
            {song.coverArt && (
              <Image
                src={song.coverArt}
                alt={song.title}
                width={56}
                height={56}
                className="rounded-md object-cover"
              />
            )}

            {/* Title */}
            <h3 className="font-medium">{song.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
