"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MunzirIntro from "./components/MunzirIntro";

/* 🔁 RELEASE DATE */
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
  const [showIntro, setShowIntro] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  /* Intro logic */
  useEffect(() => {
    const seen = sessionStorage.getItem("munzir-intro-seen");
    if (!seen) {
      setShowIntro(true);
      sessionStorage.setItem("munzir-intro-seen", "true");

      setTimeout(() => {
        setShowIntro(false);
      }, 4000); // ⏱ 4 seconds
    }
  }, []);

  /* Countdown */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* FULLSCREEN INTRO */}
      {showIntro && <MunzirIntro />}

      {/* HOME CONTENT */}
      {!showIntro && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold">
              DIPANSHU GABA
            </h1>

            <p className="text-gray-600 text-lg">
              Artist · Rapper · Songwriter
            </p>

            {/* Release Box */}
            <div className="rounded-2xl border px-6 py-5 max-w-md">
              <p className="font-semibold">
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

                  <div className="mt-3 flex gap-5 font-mono">
                    <span>{timeLeft.days}d</span>
                    <span>{timeLeft.hours}h</span>
                    <span>{timeLeft.minutes}m</span>
                    <span>{timeLeft.seconds}s</span>
                  </div>
                </>
              ) : (
                <p className="mt-2 text-sm text-gray-600">
                  Available on Spotify & Apple Music
                </p>
              )}
            </div>

            <Link
              href="/music"
              className="inline-block border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition"
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
