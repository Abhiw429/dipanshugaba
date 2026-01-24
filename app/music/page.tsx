import Link from "next/link";

export default function MusicPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Music</h1>

      <Link href="/music/camouflage-freeverse" className="underline">
        Camouflage (Freeverse)
      </Link>
    </section>
  );
}
