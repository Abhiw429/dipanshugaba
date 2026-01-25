"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* 🔁 SAME RELEASE DATE AS HOME */
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

export default function MusicPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Music</h1>

      <Link
        href="/music/camouflage-freeverse"
        className="flex items-center gap-6 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
      >
        {/* Cover */}
        <Image
          src="/images/covers/camouflage-freeverse.jpg"
          alt="Camouflage cover"
          width={120}
          height={120}
          className="rounded-lg"
        />

        {/* Info */}
    <div className="space-y-1">
  <h2 className="text-xl font-semibold">
    Camouflage (Freeverse)
  </h2>

  {timeLeft ? (
    <>
      <p className="text-xs text-gray-500">
        Releasing on all streaming platforms in
      </p>

      <div className="flex gap-4 text-sm font-medium text-gray-800">
        <span>{timeLeft.days}d</span>
        <span>{timeLeft.hours}h</span>
        <span>{timeLeft.minutes}m</span>
        <span>{timeLeft.seconds}s</span>
      </div>
    </>
  ) : (
    <p className="text-sm text-gray-600">
      Available on all streaming platforms
    </p>
  )}
</div>
      </Link>
    </section>
  );
}
