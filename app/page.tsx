import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
  );
}
