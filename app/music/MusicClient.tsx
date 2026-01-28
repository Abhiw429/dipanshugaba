"use client";

import Link from "next/link";
import Image from "next/image";

export default function MusicClient({ projects }: any) {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Music</h1>

      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="space-y-4">
        {projects.map((project: any) => (
          <Link
            key={project.slug}
            href={`/music/projects/${project.slug}`}
            className="flex items-center gap-6 border rounded-xl p-4 hover:bg-gray-50 transition"
          >
            {project.coverArt && (
              <Image
                src={project.coverArt}
                alt={project.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
            )}

            <div>
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              {project.status === "ongoing" && (
                <span className="text-xs text-red-600">
                  ● Ongoing
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
