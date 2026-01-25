"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* 🔁 DSP RELEASE DATE */
const RELEASE_DATE = new Date("2026-01-26T00:00:00");

function getTimeLeft() {
  const now = Date.now();
  const diff = RELEASE_DATE.getTime() - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const seen = sessionStorage.getItem("munzir-banner-seen");
    if (!seen) setShowBanner(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("munzir-banner-seen", "true");
  };

  return (
    <>
      {/* ===== MUNZIR POPUP BANNER ===== */}
      {showBanner && (
        <div className="fixed inset-0 z-40 flex items-start justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={closeBanner}
          />

          <div className="relative mt-24 w-[320px] rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden z-50">
            <button
              onClick={closeBanner}
              aria-label="Close"
              className="absolute top-3 right-3 z-50 w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center shadow-md hover:bg-red-700 transition"
            >
              <span className="text-gray-200 text-lg leading-none">×</span>
            </button>

            <Image
              src="/images/covers/munzir.jpg"
              alt="Munzir – Coming Soon"
              width={320}
              height={320}
              className="object-cover"
              priority
            />

            <div className="p-5 text-center space-y-1">
              <p className="text-xs tracking-widest text-gray-500 font-semibold">
                UPCOMING
              </p>
              <h3 className="text-lg font-bold">Munzir</h3>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== MAIN HOME CONTENT ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            DIPANSHU GABA
          </h1>

          <p className="text-gray-600 text-lg">
            Artist · Rapper · Songwriter
          </p>

          {/* ===== RELEASE STATUS BOX ===== */}
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm max-w-md">
            <p className="text-sm font-semibold text-gray-900">
              Camouflage (Freeverse)
            </p>

            {timeLeft ? (
              <>
                <p className="mt-1 text-xs text-gray-500">
                  Releasing on all streaming platforms in
                </p>

                <div className="mt-3 flex gap-6 text-sm font-medium text-gray-800">
                  <span>{timeLeft.days}d</span>
                  <span>{timeLeft.hours}h</span>
                  <span>{timeLeft.minutes}m</span>
                  <span>{timeLeft.seconds}s</span>
                </div>
              </>
            ) : (
              <>
                <p className="mt-1 text-xs text-gray-500">
                  Available now on
                </p>

                <div className="mt-3 flex items-center gap-4">
                  {/* Spotify */}
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-gray-800 hover:bg-black hover:text-white transition"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.372 18.627 0 12 0zm5.498 17.395a.748.748 0 01-1.03.245c-2.82-1.726-6.37-2.116-10.553-1.159a.75.75 0 11-.334-1.462c4.57-1.045 8.48-.6 11.64 1.33a.75.75 0 01.277 1.046z" />
                    </svg>
                    <span>Spotify</span>
                  </a>

                  {/* Apple Music */}
                  <a
                    href="https://music.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-gray-800 hover:bg-black hover:text-white transition"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.365 1.43c0 1.14-.468 2.254-1.237 3.06-.81.855-2.155 1.52-3.3 1.43-.15-1.12.33-2.27 1.13-3.1.78-.82 2.21-1.44 3.41-1.39z" />
                    </svg>
                    <span>Apple Music</span>
                  </a>
                </div>
              </>
            )}
          </div>

          <Link
            href="/music"
            className="inline-block border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Explore Music
          </Link>
        </div>

        {/* Hero Image */}
        <Image
          src="/images/hero.jpg"
          alt="Dipanshu Gaba"
          width={500}
          height={600}
          className="rounded-xl"
          priority
        />
      </section>
    </>
  );
}

