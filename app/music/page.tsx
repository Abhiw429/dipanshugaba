"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Tab = "Latest" | "Projects" | "Singles";

export default function MusicPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Latest");

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Music</h1>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200">
        {(["Latest", "Projects", "Singles"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Latest */}
      {activeTab === "Latest" && (
        <Link
          href="/music/camouflage-freeverse"
          className="flex items-center gap-6 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
        >
          <Image
            src="/images/covers/camouflage-freeverse.jpg"
            alt="Camouflage cover"
            width={120}
            height={120}
            className="rounded-lg"
          />

          <div className="space-y-1">
            <h2 className="text-xl font-semibold">
              Camouflage (Freeverse)
            </h2>

            <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
              Pyaaj Malaai — EP
            </span>
          </div>
        </Link>
      )}

      {/* Projects */}
      {activeTab === "Projects" && (
        <Link
          href="/music/projects/pyaaj-malaai"
          className="flex items-center gap-6 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
        >
          <Image
            src="/images/covers/pyaaj-malaai.jpg"
            alt="Pyaaj Malaai EP"
            width={120}
            height={120}
            className="rounded-lg"
          />

          <div>
            <h2 className="text-xl font-semibold">Pyaaj Malaai</h2>
            <div className="flex items-center gap-3">
  <span className="text-sm text-gray-500">EP</span>

  {/* Ongoing tag */}
  <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600">
    <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse-dot" />
    Ongoing
  </span>
</div>
          </div>
        </Link>
      )}

      {/* Singles */}
      {activeTab === "Singles" && (
        <p className="text-sm text-gray-500">
          Singles coming soon.
        </p>
      )}
    </section>
  );
}
