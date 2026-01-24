import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">DIPANSHU GABA</h1>

      <Image
        src="/images/hero.jpg"
        alt="Dipanshu Gaba"
        width={400}
        height={500}
      />

      <Link href="/music" className="underline">
        Go to Music
      </Link>
    </section>
  );
}
