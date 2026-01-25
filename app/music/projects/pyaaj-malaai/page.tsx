import Link from "next/link";
import Image from "next/image";

export default function PyaajMalaaiPage() {
  return (
    <section className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Pyaaj Malaai</h1>
        <p className="text-gray-500 mt-1">EP</p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT: Track list (comes SECOND on mobile) */}
        <div className="order-2 md:order-1 space-y-6">

          {/* Track card */}
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

          {/* Later you can add more tracks here */}
        </div>

        {/* RIGHT: EP Cover (comes FIRST on mobile) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/images/covers/pyaaj-malaai.jpg"
            alt="Pyaaj Malaai EP cover"
            width={420}
            height={420}
            className="rounded-2xl shadow-lg aspect-square object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
