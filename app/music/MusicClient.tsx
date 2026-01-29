"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Tab = "latest" | "projects" | "singles";

export default function MusicClient({
  latest,
  projects = [],
  singles = [],
}: any) {
  const [activeTab, setActiveTab] = useState<Tab>("latest");

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Music</h1>

      {/* ================= TABS ================= */}
      <div className="flex gap-8 border-b">
        {(["latest", "projects", "singles"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ================= LATEST ================= */}
      {activeTab === "latest" && latest && (
        <Link
          href={
            latest.projectSlug
              ? `/music/projects/${latest.projectSlug}/${latest.slug}`
              : `/music/${latest.slug}`
          }
          className="flex items-center gap-6 border rounded-xl p-4 hover:bg-gray-50 transition"
        >
          {latest.coverArt && (
            <Image
              src={latest.coverArt}
              alt={latest.title}
              width={100}
              height={100}
              className="rounded-lg"
            />
          )}

          <div className="space-y-1">
            {/* Latest label — neutral */}
            <div className="flex items-center gap-2 text-xs text-gray-700">
              <span className="h-2 w-2 rounded-full bg-black" />
              Latest Release
            </div>

            <h3 className="text-xl font-semibold">
              {latest.title}
            </h3>

            {/* ✅ PROJECT NAME (not generic text) */}
            {latest.projectTitle && (
              <span className="inline-block text-xs text-gray-600 border px-2 py-0.5 rounded">
                {latest.projectTitle}
              </span>
            )}
          </div>
        </Link>
      )}

      {/* ================= PROJECTS ================= */}
      {activeTab === "projects" &&
        projects.map((p: any) => (
          <Link
            key={p.slug}
            href={`/music/projects/${p.slug}`}
            className="flex items-center gap-6 border rounded-xl p-4 hover:bg-gray-50 transition"
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

            <div>
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>

              {/* 🔴 ONGOING (only when true) */}
              {p.status === true && (
                <div className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-gray-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-black animate-pulse-dot" />
                  Ongoing
                </div>
              )}
            </div>
          </Link>
        ))}

      {/* ================= SINGLES ================= */}
      {activeTab === "singles" && (
        singles.length === 0 ? (
          <p className="text-sm text-gray-500 italic">
            Singles coming soon…
          </p>
        ) : (
          singles.map((s: any) => {
            const isLatest = latest?.slug === s.slug;

            return (
              <Link
                key={s.slug}
                href={`/music/${s.slug}`}
                className="flex items-center gap-6 border rounded-xl p-4 hover:bg-gray-50 transition"
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

                <div className="space-y-1">
                  {isLatest && (
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-gray-500" />
                      Latest Release
                    </div>
                  )}

                  <h3 className="text-lg font-medium">
                    {s.title}
                  </h3>
                </div>
              </Link>
            );
          })
        )
      )}
    </section>
  );
}
