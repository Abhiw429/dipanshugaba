import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/hero.jpg"
          alt="Dipanshu Gaba"
          width={600}
          height={750}
          className="rounded-2xl w-full"
          priority
        />

        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            DIPANSHU GABA
          </h1>
          <p className="text-zinc-600">
            Official artist website · Music · Lyrics
          </p>

          <Link
            href="/music/camouflage-freeverse"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm"
          >
            Latest Release: Camouflage (Freeverse)
          </Link>
        </div>
      </div>
    </section>
  );
}
