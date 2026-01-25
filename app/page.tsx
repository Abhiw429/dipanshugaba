"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const [showIntro, setShowIntro] = useState(false);

  /* 🔥 INTRO — ONLY ON HOME, ONLY ONCE PER SESSION */
  useEffect(() => {
    if (pathname !== "/") return;

    const seen = sessionStorage.getItem("munzir-intro-seen");
    if (!seen) {
      setShowIntro(true);
      sessionStorage.setItem("munzir-intro-seen", "true");

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 3600); // MUST match animation duration

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {/* 🔥 FULLSCREEN SPLIT INTRO */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
          
          {/* TOP HALF */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-split-top flex items-end justify-center">
            <div className="mb-6 animate-intro-fade">
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

          {/* BOTTOM HALF */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black animate-split-bottom flex items-start justify-center">
            <div className="mt-6 text-center animate-intro-fade">
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
