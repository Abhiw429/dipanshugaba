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
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.588 14.512a.624.624 0 0 1-.858.205c-2.352-1.436-5.314-1.761-8.8-.965a.625.625 0 0 1-.28-1.218c3.809-.871 7.086-.496 9.704 1.106a.625.625 0 0 1 .234.872zm1.225-2.726a.781.781 0 0 1-1.074.257c-2.692-1.654-6.792-2.135-9.973-1.17a.781.781 0 0 1-.454-1.494c3.636-1.103 8.157-.568 11.244 1.328a.781.781 0 0 1 .257 1.079zm.105-2.842C14.693 9.04 9.3 8.9 6.41 9.781a.937.937 0 0 1-.545-1.793c3.322-1.008 9.266-.815 12.771 1.266a.937.937 0 1 1-.718 1.69z"/>
  </svg>
);

const AppleMusicIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M16 3v12.55a2.5 2.5 0 1 1-1.5-2.3V7.1l-5 1.1V15.5a2.5 2.5 0 1 1-1.5-2.3V4.5L16 3z"/>
  </svg>
);

const SoundCloudIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M17.5 10a4.5 4.5 0 0 0-4.356 3.278L13 13h-1V8.5a.5.5 0 0 0-1 0V13h-1V6.5a.5.5 0 0 0-1 0V13H8V9.5a.5.5 0 0 0-1 0V13H6a3 3 0 0 0 0 6h11.5a3.5 3.5 0 0 0 0-7z"/>
  </svg>
);

const AmazonMusicIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Amazon smile */}
    <path d="M4 15c3.5 2.5 12.5 2.5 16 0" />
    <path d="M14.5 15.5l1.5-1.5-1.5-1.5" />

    {/* Music note */}
    <path d="M9 5v9a2 2 0 1 1-1-1.7V6l7-1.5V12a2 2 0 1 1-1-1.7V5z" />
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

  {/* LEFT CONTENT */}
  <div className="space-y-6">

    {/* Title */}
    <h1 className="text-2xl font-bold">{song.title}</h1>

    {/* ✅ Image (mobile only, centered, after title) */}
    {song.coverArt?.url && (
      <div className="md:hidden flex justify-center">
        <Image
          src={song.coverArt.url}
          alt={song.coverArt.title || song.title}
          width={260}
          height={260}
          className="rounded-2xl aspect-square object-cover shadow-lg"
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

    {/* Listen Now */}
    <button
      onClick={() => setShowModal(true)}
      className="inline-flex items-center gap-2 border px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition w-fit"
    >
      <PlayIcon />
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

  {/* ✅ Image (desktop only — EXACTLY like your working code) */}
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
