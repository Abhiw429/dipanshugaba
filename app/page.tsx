"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);

  /* 🔥 MUNZIR INTRO — ONCE PER SESSION, HOME ONLY */
  useEffect(() => {
    if (pathname !== "/") return;

    const seen = sessionStorage.getItem("munzir-intro-seen");
    if (!seen) {
      setShowIntro(true);
      sessionStorage.setItem("munzir-intro-seen", "true");

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2000); // ⏱ 2s intro

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {/* 🌑 FULLSCREEN MUNZIR INTRO */}
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
