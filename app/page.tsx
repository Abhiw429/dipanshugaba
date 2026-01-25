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
    if (!seen) {
      setShowIntro(true);
      sessionStorage.setItem("munzir-intro-seen", "true");

      const t = setTimeout(() => {
        setShowIntro(false);
      }, 1300); // intro duration

      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <>
      {/* 🔥 SPLIT INTRO */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          
          {/* TOP HALF */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-slide-top" />

          {/* BOTTOM HALF */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black animate-slide-bottom" />

          {/* CENTER CONTENT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <Image
                src="/images/covers/munzir.jpg"
                alt="Munzir Coming Soon"
                width={280}
                height={280}
                className="rounded-2xl shadow-2xl"
                priority
              />

              <div className="text-center">
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
