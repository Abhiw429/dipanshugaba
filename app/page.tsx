"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* 🎵 CAMOUFLAGE RELEASE DATE */
const RELEASE_DATE = new Date("2026-01-26T00:00:00");

function getTimeLeft() {
  const diff = RELEASE_DATE.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Home() {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  /* 🔥 MUNZIR INTRO — ONCE PER SESSION, HOME ONLY */
  useEffect(() => {
    if (pathname !== "/") return;

    const seen = sessionStorage.getItem("munzir-intro-seen");
    if (!seen) {
      setShowIntro(true);
      sessionStorage.setItem("munzir-intro-seen", "true");

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  /* ⏳ CAMOUFLAGE COUNTDOWN */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 🌑 FULLSCREEN INTRO (NON-BLOCKING AFTER END) */}
      {showIntro && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black
            animate-intro
            pointer-events-none
          "
        >
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/covers/munzir.jpg"
              alt="Munzir Coming Soon"
              width={320}
              height={320}
              priority
              className="rounded-2xl shadow-2xl"
            />

            <div className="text-center space-y-1">
              <p className="text-xs tracking-widest text-gray-400">
                UPCOMING
              </p>
              <h2 className="text-2xl font-bold text-white">
                Munzir
              </h2>
              <p className="text-sm text-gray-400">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🏠 HOME CONTENT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold">
            DIPANSHU GABA
          </h1>

          <p className="text-gray-600 text-lg">
            Artist · Rapper · Songwriter
          </p>

          {/* 🎵 CAMOUFLAGE RELEASE BOX */}
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm max-w-md">
            <p className="text-sm font-semibold text-gray-900">
              Camouflage (Freeverse)
            </p>

            {timeLeft ? (
              <>
                <p className="mt-1 text-xs text-gray-500">
                  Releasing on all streaming platforms on{" "}
                  <span className="font-medium text-gray-700">
                    26/01/2026
                  </span>
                </p>

                <div className="mt-3 flex gap-6 text-sm font-medium text-gray-800 font-mono tabular-nums">
                  <span>{timeLeft.days}d</span>
                  <span>{timeLeft.hours}h</span>
                  <span>{timeLeft.minutes}m</span>
                  <span>{timeLeft.seconds}s</span>
                </div>
              </>
            ) : (
              <p className="mt-2 text-sm text-gray-600">
                Available now on Spotify & Apple Music
              </p>
            )}
          </div>

          <Link
            href="/music"
            className="inline-block border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            Explore Music
          </Link>
        </div>

        {/* Right */}
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
