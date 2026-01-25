"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* 🔁 CAMOUFLAGE RELEASE DATE */
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
  const [showIntro, setShowIntro] = useState(true);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  /* Munzir intro (once per session) */
  useEffect(() => {
    const seen = sessionStorage.getItem("munzir-intro-seen");

    if (seen) {
      setShowIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("munzir-intro-seen", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  /* Camouflage countdown */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ===== FULLSCREEN MUNZIR INTRO ===== */}
      {showIntro && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <div className="animate-intro flex flex-col items-center gap-6">
            <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/covers/munzir.jpg"
                alt="Munzir – Coming Soon"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center text-white tracking-wide">
              <h1 className="text-3xl font-bold uppercase">Munzir</h1>
              <p className="mt-1 text-sm opacity-80">Coming Soon</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== MAIN HOME CONTENT ===== */}
      {!showIntro && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              DIPANSHU GABA
            </h1>

            <p className="text-gray-600 text-lg">
              Artist · Rapper · Songwriter
            </p>

            {/* ===== CAMOUFLAGE RELEASE STATUS BOX ===== */}
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

                  <div className="mt-3 flex gap-6 text-sm font-medium text-gray-800">
                    <span>{timeLeft.days}d</span>
                    <span>{timeLeft.hours}h</span>
                    <span>{timeLeft.minutes}m</span>
                    <span>{timeLeft.seconds}s</span>
                  </div>
                </>
              ) : (
                <p className="mt-2 text-sm text-gray-600">
                  Available on all streaming platforms
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
      )}
    </>
  );
}
