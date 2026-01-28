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
            className={`pb-3 text-sm font-medium transition ${
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
              width={120}
              height={120}
              className="rounded-lg"
            />
          )}

          <div>
            <p className="text-xs text-green-600 mb-1 font-medium">
              ● Latest Release
            </p>
            <h3 className="text-xl font-semibold">
              {latest.title}
            </h3>
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

            <div className="space-y-1">
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>

              {/* 🔴 ONGOING BADGE */}
              {p.status === "ongoing" && (
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
                  </span>
                  Ongoing
                </span>
              )}
            </div>
          </Link>
        ))}

      {/* ================= SINGLES ================= */}
      {activeTab === "singles" &&
        singles.map((s: any) => (
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
            <h3 className="text-lg font-medium">
              {s.title}
            </h3>
          </Link>
        ))}
    </section>
  );
}
