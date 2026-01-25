import Link from "next/link";
import Image from "next/image";

export default function PyaajMalaaiPage() {
  return (
    <section className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold">Pyaaj Malaai</h1>
      <p className="text-gray-600">EP</p>

      {/* Track list */}
      <Link
        href="/music/camouflage-freeverse"
        className="flex items-center gap-6 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
      >
        <Image
          src="/images/covers/camouflage-freeverse.jpg"
          alt="Camouflage cover"
          width={100}
          height={100}
          className="rounded-lg"
        />

        <div>
          <h2 className="text-lg font-semibold">
            Camouflage (Freeverse)
          </h2>
        </div>
      </Link>
    </section>
  );
}
