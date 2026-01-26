"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const [showIntro, setShowIntro] = useState(false);
  const [introActive, setIntroActive] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const seen = sessionStorage.getItem("munzir-intro-seen");
    if (seen) return;

    sessionStorage.setItem("munzir-intro-seen", "true");

    // 1️⃣ Mark intro lifecycle as active immediately
    setIntroActive(true);

    // 2️⃣ Show intro after 1s
    const startIntro = setTimeout(() => {
      setShowIntro(true);
    }, 100);

    // 3️⃣ End intro AFTER full animation
    const endIntro = setTimeout(() => {
      setShowIntro(false);
      setIntroActive(false);
    }, 5200); // 1s delay + 4.2s animation

    return () => {
      clearTimeout(startIntro);
      clearTimeout(endIntro);
    };
  }, [pathname]);

  return (
    <>
      {/* 🎬 SPLIT INTRO */}
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
      <section
  className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
    introActive ? "pointer-events-none" : ""
  }`}
>
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

        <div className="flex justify-center md:justify-end md:-mt-10">
  <Image
    src="/images/hero.jpg"
    alt="Dipanshu Gaba"
    width={420}
    height={420}
    priority
    className="rounded-2xl shadow-lg"
  />
</div>
      </section>
    </>
  );
}
