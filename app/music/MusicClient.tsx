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
              width={96}
              height={96}
              className="rounded-lg"
            />
          )}

          <div className="space-y-1">
            {/* Latest badge — gray */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="h-2 w-2 rounded-full bg-gray-500" />
              Latest Release
            </div>

            <h3 className="text-xl font-semibold">
              {latest.title}
            </h3>

            {/* Project tag (only if part of project) */}
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
                width={96}
                height={96}
                className="rounded-lg"
              />
            )}

            <div>
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>

              {/* 🔴 ONGOING */}
              {p.status === true && (
                <div className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-red-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse-dot" />
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
      const isComingSoon = s.comingSoon === true;

      const CardContent = (
        <>
          {s.coverArt && (
            <Image
              src={s.coverArt}
              alt={s.title}
              width={96}
              height={96}
              className={`rounded-lg ${
                isComingSoon ? "opacity-60" : ""
              }`}
            />
          )}

          <div className="space-y-1">
            {isLatest && !isComingSoon && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="h-2 w-2 rounded-full bg-gray-500" />
                Latest Release
              </div>
            )}

            {isComingSoon && (
              <div className="text-xs text-gray-500">
                Coming Soon
              </div>
            )}

            <h3 className="text-lg font-medium">
              {s.title}
            </h3>
          </div>
        </>
      );

      // ❌ NOT CLICKABLE if coming soon
      if (isComingSoon) {
        return (
          <div
            key={s.slug}
            className="flex items-center gap-6 border rounded-xl p-4 bg-gray-50 cursor-not-allowed"
          >
            {CardContent}
          </div>
        );
      }

      // ✅ Clickable only if released
      return (
        <Link
          key={s.slug}
          href={`/music/${s.slug}`}
          className="flex items-center gap-6 border rounded-xl p-4 hover:bg-gray-50 transition"
        >
          {CardContent}
        </Link>
      );
    })
  )
      )}
    </section>
  );
}
