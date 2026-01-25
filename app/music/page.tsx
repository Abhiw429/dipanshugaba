"use client";

import Link from "next/link";
import Image from "next/image";

export default function MusicPage() {
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

          <p className="text-sm text-gray-500">
            Latest release
          </p>
        </div>
      </Link>
    </section>
  );
}
