"use client";

import { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

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
          <h1 className="text-2xl font-bold">{song.title}</h1>

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
  width="20"
  height="20"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path
    fill="currentColor"
    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z"
  />
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
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
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

          {/* Lyrics (Markdown-rendered) */}
          {activeTab === "lyrics" && song.lyrics && (
  <div className="text-gray-800 leading-relaxed text-base">
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <div className="whitespace-pre-wrap leading-loose mb-6">
            {children}
          </div>
        ),
        em: ({ children }) => (
          <em className="italic font-medium">{children}</em>
        ),
      }}
    >
      {song.lyrics}
    </ReactMarkdown>
  </div>
)}

          {/* Breakdown (Markdown-rendered) */}
          {activeTab === "breakdown" && song.breakdown && (
  <div className="text-gray-700 leading-relaxed">
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p className="mb-5 leading-relaxed">
            {children}
          </p>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-500 block mb-4">
            {children}
          </em>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 pl-4 italic text-gray-500 mb-6">
            {children}
          </blockquote>
        ),
      }}
    >
      {song.breakdown}
    </ReactMarkdown>
  </div>
)}
        </>
      )}
    </section>
  );
}

