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
    comingSoon?: boolean;
  }[];
  latestSongSlug: string | null;
};

export default function ProjectClient({
  project,
  songs,
  projectSlug,
  latestSongSlug,
}: Props) {
  // 🔥 Coming soon songs first
  const orderedSongs = [...songs].sort((a, b) => {
    if (a.comingSoon && !b.comingSoon) return -1;
    if (!a.comingSoon && b.comingSoon) return 1;
    return 0;
  });

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
          {orderedSongs.map((song) => {
            const isLatest =
              song.slug === latestSongSlug && !song.comingSoon;

            const content = (
              <div
                className={`relative flex items-center gap-4 border rounded-xl p-4 transition ${
                  song.comingSoon
                    ? "opacity-60 cursor-not-allowed bg-gray-50"
                    : "hover:bg-gray-50"
                }`}
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

                <div className="space-y-1">
                  <span className="font-medium">{song.title}</span>

                  {/* 🟡 COMING SOON */}
                  {song.comingSoon && (
                    <div className="text-xs text-gray-500">
                      Coming Soon
                    </div>
                  )}

                  {/* ⚪ LATEST RELEASE */}
                  {isLatest && (
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-gray-500" />
                      Latest Release
                    </div>
                  )}
                </div>
              </div>
            );

            // ❌ NOT CLICKABLE IF COMING SOON
            if (song.comingSoon) {
              return <div key={song.slug}>{content}</div>;
            }

            // ✅ CLICKABLE IF RELEASED
            return (
              <Link
                key={song.slug}
                href={`/music/projects/${projectSlug}/${song.slug}`}
              >
                {content}
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
