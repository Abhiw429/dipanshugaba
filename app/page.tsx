"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const seen = sessionStorage.getItem("munzir-intro-seen");
    if (seen) return;

    sessionStorage.setItem("munzir-intro-seen", "true");

    // 1️⃣ Home visible for 1s
    const startIntro = setTimeout(() => {
      setShowIntro(true);
    }, 1000);

    // 2️⃣ REMOVE INTRO ONLY AFTER FULL ANIMATION
    const removeIntro = setTimeout(() => {
      setShowIntro(false);
    }, 5200); // 1s delay + 4.2s animation

    return () => {
      clearTimeout(startIntro);
      clearTimeout(removeIntro);
    };
  }, [pathname]);

  return (
    <>
      {/* 🎬 SPLIT IN → HOLD → SPLIT OUT (FULLY VISIBLE) */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
          
          {/* TOP PANEL */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-split-in-top flex items-end justify-center">
            <div className="mb-6 animate-intro-content">
              <Image
                src="/images/covers/munzir.jpg"
                alt="Munzir Coming Soon"
                width={260}
                height={260}
                priority
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* BOTTOM PANEL */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black animate-split-in-bottom flex items-start justify-center">
            <div className="mt-6 text-center animate-intro-content">
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

      {/* 🏠 HOME PAGE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
