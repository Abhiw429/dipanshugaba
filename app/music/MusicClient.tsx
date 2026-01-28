"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Tab = "latest" | "projects" | "singles";

export default function MusicClient({
  latest,
  projects,
  singles,
}: any) {
  const [activeTab, setActiveTab] = useState<Tab>("latest");

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Music</h1>

      {/* TABS */}
      <div className="flex gap-8 border-b">
        {["latest", "projects", "singles"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as Tab)}
            className={`pb-3 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* LATEST */}
      {activeTab === "latest" && latest && (
        <Link
          href={
            latest.projectSlug
              ? `/music/projects/${latest.projectSlug}/${latest.slug}`
              : `/music/${latest.slug}`
          }
          className="flex items-center gap-6 border rounded-xl p-4"
        >
          {latest.coverArt && (
            <Image
              src={latest.coverArt}
              alt={latest.title}
              width={120}
              height={120}
              className="rounded-lg"
            />
          )}
          <div>
            <p className="text-xs text-green-600 mb-1">
              ● Latest Release
            </p>
            <h3 className="text-xl font-semibold">
              {latest.title}
            </h3>
          </div>
        </Link>
      )}

      {/* PROJECTS */}
      {activeTab === "projects" &&
        projects.map((p: any) => (
          <Link
            key={p.slug}
            href={`/music/projects/${p.slug}`}
            className="flex items-center gap-6 border rounded-xl p-4"
          >
            {p.coverArt && (
              <Image
                src={p.coverArt}
                alt={p.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
            )}
            <h3 className="text-xl font-semibold">
              {p.title}
            </h3>
          </Link>
        ))}

      {/* SINGLES */}
      {activeTab === "singles" &&
        singles.map((s: any) => (
          <Link
            key={s.slug}
            href={`/music/${s.slug}`}
            className="flex items-center gap-6 border rounded-xl p-4"
          >
            {s.coverArt && (
              <Image
                src={s.coverArt}
                alt={s.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
            )}
            <h3 className="text-lg font-medium">
              {s.title}
            </h3>
          </Link>
        ))}
    </section>
  );
}
