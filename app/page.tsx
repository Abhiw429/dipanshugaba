"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("munzir-banner-seen");
    if (!seen) setShowBanner(true);
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("munzir-banner-seen", "true");
  };

  return (
    <>
      {/* Backdrop + Banner */}
      {showBanner && (
        <div className="fixed inset-0 z-40 flex items-start justify-center">
          
          {/* Blur Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={closeBanner}
          />

          {/* Banner Card */}
          <div className="relative mt-24 w-[320px] rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden z-50">
            
            {/* Close Button */}
            <button
  onClick={closeBanner}
  aria-label="Close"
  className="
    absolute top-3 right-3 z-50
    w-8 h-8
    rounded-full
    bg-red-600/90
    flex items-center justify-center
    shadow-md
    hover:bg-red-700
    transition
  "
>
  <span className="text-gray-200 text-lg leading-none">×</span>
</button>

            {/* Image */}
            <Image
              src="/images/covers/munzir.jpg"
              alt="Munzir – Coming Soon"
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
                Munzir
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
    </>
  );
}
