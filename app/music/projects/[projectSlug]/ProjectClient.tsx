"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  projectSlug: string;
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
  latestSongSlug: string | null;
};

export default function ProjectClient({
  project,
  songs,
  projectSlug,
  latestSongSlug,
}: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      {/* LEFT */}
      <div className="space-y-4 md:pt-16">
        <h1 className="text-4xl font-extrabold">{project.title}</h1>

        {project.description && (
          <p className="italic text-gray-500">{project.description}</p>
        )}

        {/* MOBILE IMAGE */}
        {project.coverArt?.url && (
          <div className="md:hidden flex justify-center pt-4">
            <Image
              src={project.coverArt.url}
              alt={project.title}
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
        )}

        {/* SONG LIST */}
        <div className="space-y-3 pt-3 max-w-xl">
          {songs.map((song) => {
            const isLatest = song.slug === latestSongSlug;

            return (
              <Link
                key={song.slug}
                href={`/music/projects/${projectSlug}/${song.slug}`}
                className="relative flex items-center gap-4 border rounded-xl p-4 hover:bg-gray-50 transition"
              >
                {song.coverArt && (
                  <Image
                    src={song.coverArt}
                    alt={song.title}
                    width={90}
                    height={90}
                    className="rounded-md object-cover"
                  />
                )}

                <div>
                  <span className="font-medium">{song.title}</span>

                  {isLatest && (
                    <div className="text-xs text-green-600 font-medium mt-1">
                      ● Latest Release
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* DESKTOP IMAGE */}
      {project.coverArt?.url && (
        <div className="hidden md:flex justify-end md:pt-16">
          <Image
            src={project.coverArt.url}
            alt={project.title}
            width={320}
            height={320}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>
      )}
    </section>
  );
}
