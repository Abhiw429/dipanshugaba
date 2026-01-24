import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Photo */}
      <div className="w-full max-w-sm mx-auto">
        <Image
          src="/images/hero.jpg"
          alt="Dipanshu Gaba"
          width={500}
          height={500}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Bio */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">About</h1>

        <p className="text-gray-700 leading-relaxed">
          Dipanshu Gaba is an independent artist from India.
          His work explores observation, identity, silence, and resistance
          through layered writing and restrained visuals.
        </p>
      </div>

    </section>
  );
}
