import Link from "next/link";
import Image from "next/image";

export default function PyaajMalaaiPage() {
  return (
    <section className="space-y-10">

      {/* Header */}
      <div className="space-y-2">
        {/* Text Image Title */}
        <Image
          src="/images/text-images/pyaaj-malaai.jpg"
          alt="Pyaaj Malaai"
          width={320}
          height={80}
          priority
          className="h-auto w-auto max-w-[280px]"
        />

        <p className="text-gray-500">EP</p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT: Track list (SECOND on mobile) */}
        <div className="order-2 md:order-1 space-y-6">

          {/* Camouflage */}
          <Link
            href="/music/projects/pyaaj-malaai/camouflage-freeverse"
            className="flex items-center gap-6 border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
          >
            <Image
              src="/images/covers/camouflage-freeverse.jpg"
              alt="Camouflage cover"
              width={96}
              height={96}
              className="rounded-lg"
            />

            <div>
              <h2 className="text-lg font-semibold">
                Camouflage (Freeverse)
              </h2>
              <p className="text-sm text-gray-500">
                Latest release
              </p>
            </div>
          </Link>

          {/* Munzir (Upcoming) */}
          <div className="flex items-center gap-6 border border-gray-200 rounded-xl p-4 bg-gray-50">
            <Image
              src="/images/covers/munzir.jpg"
              alt="Munzir cover"
              width={96}
              height={96}
              className="rounded-lg"
            />

            <div>
              <h3 className="text-lg font-semibold">
                Munzir
              </h3>
              <p className="text-sm text-gray-500">
                Releasing soon
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT: EP Cover (FIRST on mobile) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/images/covers/pyaaj-malaai.jpg"
            alt="Pyaaj Malaai EP cover"
            width={360}
            height={360}
            priority
            className="
              rounded-2xl
              shadow-lg
              aspect-square
              object-cover
              max-w-[300px] md:max-w-[360px]
            "
          />
        </div>

      </div>
    </section>
  );
}
