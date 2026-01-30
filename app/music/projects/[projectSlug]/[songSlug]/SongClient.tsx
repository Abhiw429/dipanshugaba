"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

/* ================= ICONS ================= */

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

const YouTubeMusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-2.5 13.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.6 14.4a.8.8 0 0 1-1.1.3 7.9 7.9 0 0 0-4.9-1.1 8.4 8.4 0 0 0-3.3.8.8.8 0 0 1-.7-1.4 10 10 0 0 1 4-.9 9.4 9.4 0 0 1 5.7 1.3.8.8 0 0 1 .3 1Z" />
  </svg>
);

const AppleMusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 3L9 4.5V16a2.5 2.5 0 1 0 1.5 2.3V8.6l5-1.1V14a2.5 2.5 0 1 0 1.5 2.3V3Z" />
  </svg>
);

const SoundCloudIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 10a4.5 4.5 0 0 0-4.3 3.1H6a3 3 0 0 0 0 6h11.5a3.5 3.5 0 0 0 0-7Z" />
  </svg>
);

const AmazonMusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 18c3.6 2.4 8.4 2.4 12 0l-1-.8c-3 1.9-7 1.9-10 0l-1 .8Zm12-7a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z" />
  </svg>
);

/* ================= TYPES ================= */

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

/* ================= COMPONENT ================= */

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
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{song.title}</h1>

          {song.description && (
            <p className="text-sm italic text-gray-500 whitespace-pre-line">
              {song.description}
            </p>
          )}

          {/* LISTEN NOW */}
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 border px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition w-fit"
          >
            <PlayIcon />
            Listen Now
          </button>

          {/* CREDITS */}
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

        {song.coverArt?.url && (
          <Image
            src={song.coverArt.url}
            alt={song.coverArt.title || song.title}
            width={300}
            height={300}
            className="rounded-2xl aspect-square object-cover shadow-lg"
            priority
          />
        )}
      </div>

      {/* TABS */}
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

          {/* LYRICS */}
          {activeTab === "lyrics" && song.lyrics && (
            <div className="text-gray-800 leading-relaxed">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-6 whitespace-pre-wrap leading-loose">
                      {children}
                    </p>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-500">{children}</em>
                  ),
                }}
              >
                {song.lyrics}
              </ReactMarkdown>
            </div>
          )}

          {/* BREAKDOWN */}
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

      {/* ================= MODAL ================= */}
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
                <a href={song.youtubeUrl} target="_blank" className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  <YouTubeIcon /> YouTube
                </a>
              )}
              {song.spotifyUrl && (
                <a href={song.spotifyUrl} target="_blank" className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  <SpotifyIcon /> Spotify
                </a>
              )}
              {song.appleMusicUrl && (
                <a href={song.appleMusicUrl} target="_blank" className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  <AppleMusicIcon /> Apple Music
                </a>
              )}
              {song.soundcloudUrl && (
                <a href={song.soundcloudUrl} target="_blank" className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  <SoundCloudIcon /> SoundCloud
                </a>
              )}
              {song.youtubeMusicUrl && (
                <a href={song.youtubeMusicUrl} target="_blank" className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  <YouTubeMusicIcon /> YouTube Music
                </a>
              )}
              {song.amazonMusicUrl && (
                <a href={song.amazonMusicUrl} target="_blank" className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:bg-black hover:text-white transition">
                  <AmazonMusicIcon /> Amazon Music
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
