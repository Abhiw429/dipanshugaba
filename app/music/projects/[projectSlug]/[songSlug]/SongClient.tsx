"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type SongClientProps = {
  song: {
    title: string;
    description?: string;
    youtubeUrl?: string;
    spotifyUrl?: string;
    appleMusicUrl?: string;
    soundcloudUrl?: string;
    youtubeMusicUrl?: string;
    amazonMusicUrl?: string;
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

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

          {/* ✅ LISTEN NOW BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 border px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition w-fit"
          >
            Listen Now
          </button>

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

          {/* Lyrics */}
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

          {/* Breakdown */}
          {activeTab === "breakdown" && song.breakdown && (
            <div className="text-gray-700 leading-relaxed">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-5 leading-relaxed">{children}</p>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-500">{children}</em>
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

      {/* ================= LISTEN NOW MODAL ================= */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{song.title}</h2>
              <button onClick={() => setShowModal(false)}>✕</button>
            </div>

            <div className="grid gap-3">
              {song.youtubeUrl && (
                <a href={song.youtubeUrl} target="_blank" className="border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  YouTube
                </a>
              )}
              {song.spotifyUrl && (
                <a href={song.spotifyUrl} target="_blank" className="border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  Spotify
                </a>
              )}
              {song.appleMusicUrl && (
                <a href={song.appleMusicUrl} target="_blank" className="border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  Apple Music
                </a>
              )}
              {song.soundcloudUrl && (
                <a href={song.soundcloudUrl} target="_blank" className="border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  SoundCloud
                </a>
              )}
              {song.youtubeMusicUrl && (
                <a href={song.youtubeMusicUrl} target="_blank" className="border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  YouTube Music
                </a>
              )}
              {song.amazonMusicUrl && (
                <a href={song.amazonMusicUrl} target="_blank" className="border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  Amazon Music
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
