"use client";

import { useState } from "react";
import Image from "next/image";

type SongClientProps = {
  song: {
    title: string;
    description?: string;
    youtubeUrl?: string;
    coverArt?: {
      url: string;
      title?: string;
    };
    credits?: string;
    lyrics?: string;
    breakdown?: string;
  };
};

export default function SongClient({ song }: SongClientProps) {
  const [activeTab, setActiveTab] = useState<"lyrics" | "breakdown">("lyrics");

  return (
    <section className="max-w-5xl mx-auto space-y-10">

      {/* HEADER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* Title */}
          <h1 className="text-2xl font-bold">
            {song.title}
          </h1>

          {/* Image (mobile) */}
          {song.coverArt?.url && (
            <div className="md:hidden">
              <Image
                src={song.coverArt.url}
                alt={song.coverArt.title || song.title}
                width={300}
                height={300}
                className="rounded-2xl aspect-square object-cover"
                priority
              />
            </div>
          )}

          {/* Description */}
          {song.description && (
            <p className="text-sm italic text-gray-500 whitespace-pre-line">
              {song.description}
            </p>
          )}

          {/* YouTube */}
          {song.youtubeUrl && (
            <a
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border px-5 py-3 rounded-full text-sm hover:bg-black hover:text-white transition w-fit"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a2.996 2.996 0 00-2.108-2.118C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.39.568A2.996 2.996 0 00.502 6.186 31.4 31.4 0 000 12a31.4 31.4 0 00.502 5.814 2.996 2.996 0 002.108 2.118C4.47 20.5 12 20.5 12 20.5s7.53 0 9.39-.568a2.996 2.996 0 002.108-2.118A31.4 31.4 0 0024 12a31.4 31.4 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
              </svg>
              <span>Listen on YouTube</span>
            </a>
          )}

          {/* Credits */}
          {song.credits && (
            <div className="rounded-2xl border bg-gradient-to-br from-gray-50 to-white p-6">
              <p className="text-xs tracking-widest text-gray-500 font-semibold mb-2">
                CREDITS:
              </p>
              <p className="text-lg whitespace-pre-line">
                {song.credits}
              </p>
            </div>
          )}
        </div>

        {/* Image (desktop) */}
        {song.coverArt?.url && (
          <div className="hidden md:flex justify-end">
            <Image
              src={song.coverArt.url}
              alt={song.coverArt.title || song.title}
              width={300}
              height={300}
              className="rounded-2xl aspect-square object-cover shadow-lg"
              priority
            />
          </div>
        )}
      </div>

      {/* Tabs */}
      {(song.lyrics || song.breakdown) && (
        <>
          <div className="flex gap-6 border-b">
            {song.lyrics && (
              <button
                onClick={() => setActiveTab("lyrics")}
                className={`pb-2 text-sm font-medium ${
                  activeTab === "lyrics"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Lyrics
              </button>
            )}

            {song.breakdown && (
              <button
                onClick={() => setActiveTab("breakdown")}
                className={`pb-2 text-sm font-medium ${
                  activeTab === "breakdown"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Breakdown
              </button>
            )}
          </div>

          {/* Lyrics */}
          {activeTab === "lyrics" && song.lyrics && (
            <pre className="whitespace-pre-wrap font-sans text-base leading-loose text-gray-800">
              {song.lyrics}
            </pre>
          )}

          {/* Breakdown */}
          {activeTab === "breakdown" && song.breakdown && (
            <div className="prose max-w-none text-gray-700 whitespace-pre-line">
              {song.breakdown}
            </div>
          )}
        </>
      )}
    </section>
  );
}
