import Image from "next/image";

export default function SongPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold">
        Camouflage (Freeverse)
      </h1>

      <p className="text-zinc-600">by Dipanshu Gaba</p>

      <Image
        src="/images/covers/camouflage-freeverse.jpg"
        alt="Camouflage cover"
        width={500}
        height={500}
        className="rounded-2xl"
      />

      <div className="whitespace-pre-line leading-relaxed text-sm sm:text-base bg-white border rounded-xl p-6">
Prabal mhtav ho ya detya kann
Satya meva jatya mann sashst singh
Kast mastak keen nar
Moostkeem jb rhete
Karm kannthastya, bolein nar
Kartvaya mev jatya

Yamuna behti jahan se
Ye ladka rhta wahaan pe
Jhaaag mein jb hai behti laaashein
Dhulke pohoche darkinnare
Paap na dhulte jbtak chalti saanse
...
      </div>
    </section>
  );
}
