"use client";

import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  slug: string;
  status?: string;
  coverArt?: string;
  latestSongSlug?: string; // optional (future-safe)
};

type Props = {
  projects: Project[];
  latestSongSlug?: string | null;
};

export default function MusicClient({ projects, latestSongSlug }: Props) {
  return (
    <section className="space-y-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Music</h1>

      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="space-y-4">
        {projects.map((project) => {
          // ✅ If latest song exists, mark ONLY ONE project as latest
          const isLatestRelease =
            latestSongSlug &&
            project.status !== "ongoing"; // ongoing ≠ release

          return (
            <Link
              key={project.slug}
              href={`/music/projects/${project.slug}`}
              className="flex items-center gap-6 border rounded-xl p-4 hover:bg-gray-50 transition"
            >
              {project.coverArt && (
                <Image
                  src={project.coverArt}
                  alt={project.title}
                  width={90}
                  height={90}
                  className="rounded-lg object-cover"
                />
              )}

              <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <div className="flex items-center gap-3">
                  {/* Ongoing */}
                  {project.status === "ongoing" && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
                      <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                      Ongoing
                    </span>
                  )}

                  {/* Latest Release (GLOBAL, ONE ONLY) */}
                  {isLatestRelease && (
                    <span className="text-xs font-medium text-emerald-600">
                      ● Latest Release
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
