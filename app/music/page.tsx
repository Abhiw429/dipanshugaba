import Link from "next/link";
import Image from "next/image";

export default function MusicPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-bold">Music</h1>

      <Link href="/music/camouflage-freeverse" className="card block">
        <Image
          src="/images/covers/camouflage-freeverse.jpg"
          alt="Camouflage Freeverse"
          width={400}
          height={400}
          className="rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold">
          Camouflage (Freeverse)
        </h2>
        <p className="text-zinc-600">Latest Release · 2026</p>
      </Link>
    </section>
  );
}
