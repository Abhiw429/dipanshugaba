"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("munizr-banner-seen");
    if (seen) setShowBanner(false);
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("munizr-banner-seen", "true");
  };

  return (
    <>
      {/* Coming Soon Banner (NOT fullscreen) */}
      {showBanner && (
        <div className="fixed inset-0 z-40 flex items-start justify-center pointer-events-none">
          <div className="pointer-events-auto mt-24 relative w-[320px] rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Close */}
            <button
              onClick={closeBanner}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Image */}
            <Image
              src="/images/covers/munizr.jpg"
              alt="Munizr – Coming Soon"
              width={320}
              height={320}
              className="object-cover"
              priority
            />

            {/* Text */}
            <div className="p-5 text-center space-y-1">
              <p className="text-xs tracking-widest text-gray-500 font-semibold">
                UPCOMING
              </p>
              <h3 className="text-lg font-bold">
                Munizr
              </h3>
              <p className="text-sm text-gray-600">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Home Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
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

        {/* Image */}
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
