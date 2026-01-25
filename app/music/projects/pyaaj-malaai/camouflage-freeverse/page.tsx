"use client";

import { useState } from "react";
import Image from "next/image";

export default function SongPage() {
  const [activeTab, setActiveTab] = useState<"lyrics" | "breakdown">("lyrics");

  return (
    <section className="max-w-5xl mx-auto space-y-10">

      {/* HEADER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* Song title */}
          <h1 className="text-2xl font-bold">
            Camouflage (Freeverse)
          </h1>

          {/* Image — mobile AFTER title, desktop on right */}
          <div className="md:hidden">
            <Image
              src="/images/covers/camouflage-freeverse.jpg"
              alt="Camouflage cover"
              width={300}
              height={300}
              className="rounded-2xl aspect-square object-cover"
              priority
            />
          </div>

          {/* YouTube button */}
          <a
            href="https://youtu.be/aZblaDVPMXU?si=YfJU1LqeGuHhv7j3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border px-5 py-3 rounded-full text-sm hover:bg-black hover:text-white transition w-fit"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a2.996 2.996 0 00-2.108-2.118C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.39.568A2.996 2.996 0 00.502 6.186 31.4 31.4 0 000 12a31.4 31.4 0 00.502 5.814 2.996 2.996 0 002.108 2.118C4.47 20.5 12 20.5 12 20.5s7.53 0 9.39-.568a2.996 2.996 0 002.108-2.118A31.4 31.4 0 0024 12a31.4 31.4 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
            </svg>
            <span>Listen on YouTube</span>
          </a>

          {/* Credits */}
          <div className="rounded-2xl border bg-gradient-to-br from-gray-50 to-white p-6">
            <p className="text-xs tracking-widest text-gray-500 font-semibold mb-2">
              CREDITS:
            </p>
            <p className="text-lg">
              All work created, written, and produced by
              <span className="block font-bold mt-1">Dipanshu Gaba</span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE — desktop only */}
        <div className="hidden md:flex justify-end">
          <Image
            src="/images/covers/camouflage-freeverse.jpg"
            alt="Camouflage cover"
            width={300}
            height={300}
            className="rounded-2xl aspect-square object-cover shadow-lg"
            priority
          />
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-6 border-b">
        <button
          onClick={() => setActiveTab("lyrics")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "lyrics"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Lyrics
        </button>

        <button
          onClick={() => setActiveTab("breakdown")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "breakdown"
              ? "border-b-2 border-black text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          Breakdown
        </button>
      </div>

      {/* TAB CONTENT */}
      {activeTab === "lyrics" && (
        <pre className="whitespace-pre-wrap font-sans text-base leading-loose text-gray-800">
{`Prabal mhtav ho ya detya kann
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
Aur Banti baatein jabtak sala sanki naache
Duniya sath h - chamke halki mannn ki baat dhann ke maarg se
Bacche mein jo tansen plte jb ho bomb drop maaang pe pistil
no sindoor shit

Lacking loha paanch se 4 fifth loaded
Caught it, Takin L inverted whole week
Physc! this that cycle neither landing nor of the tulips
Jb they are in their ladies sangeet justinthat case they are trippin
Hoelland, wind-mills, trippy maula jbbhi
They be seekin in my mastisk
They-sees jhola bharke punches, they-sees hilti nhi h pistil, toh noo key-pinn (keepin) Donald piercing

Jb kaam pe aake R dabbe
Toh naam ke aage R lagge
The one (Dhawan) who kinda motivates
Aur kal ko aakr naam jappe
Jo lac-tose intolarent uske muh pr aakr dhaaar lagge
Saakaar kree vyaapaar jo dakshin - na guru ka maan krre

Toh daaye baaye sb
DishaAo mein, dekh
Ghirraaa hu mai kali fake
Nigghaaho se, seke hath
Chittaon se, I mean the ash trays ahh
Kiddo pr pest spray, girre matt grey - matt pe
Red tape Boxed up Champagne for the next docs
THE KID GROWS, gotsnub nose

Charrrreeeee

Callme! shitaan cuz jaldi ka kaam shaitaan ka
Aur shubh kaam mein deri kaisi
Shaitaani mehngi pdti jb sangat waisi
Barkat ke langar lgte
Ghar ghar jb khusiyaan aati
Sar katkar harkat hoti
Tb bhi milti maafi yah

Girre-girre-Girre karvat lete hi, put up takiye 2,3
Teri khatiya choti
Teri Old school beat pe old school shit nhi
Dakiyanoosi ahh

Yahaan Mera Feature jaise carbonation
Teri Saadi shit yaha fizzy bnne
Tera of creature gya hibernation pe jb bars se mausam brfilla pddee

Par teri bi*ch ho na thandi
Oo mennu kehndi, dekho hath pe mehndi
Dhoondo naam kiska - aapka h ji
Lekin Chup mai kyu hu, kyu inse dur hu?
Cuz apne circle se meetho ka circle nikala
That shit no dalgona candy. Woah

There is no camouflage shit, no hidding
Duniya se, ghaas bhoos, ke ahh peeche
Bio student the only time I need lines when I write (biological name) krr

Solanum Lycopersicum glut cuz sauce bohot when the mak-sad drops
Ragde bhaang ke podho ko can I? bss kya hi lena
The pitch goes down the slope nelumbo nucifera
Lords kh do, kala hrraaa de sfed ko that's noo vitis vinifera
Diye bohot saare good flows, ya god flows jb o zubaan pr h logo ki
Todi clavicle tedhe garibaaan ftti tie bhi h bohoto ki

But Ab sille kon
Overused bar used hnn silly kon
Pumped out chest bahar haan silicon
Aaya Fresh maal seal h kon todde haayymannn bolle Ki
Abhi toh shuru mera catalog

Matha phod apne metaphod pr khata khol
Kalam tod aur naam likh siyaahi se korre panno par
Jaahaan iss khel ke top 4 love bohot
To those ones who make songs and got some respect through this
But...`}
        </pre>
      )}

      {activeTab === "breakdown" && (
        <div className="text-gray-600 leading-relaxed">
          <p className="mb-4">Breakdown coming soon.</p>
          <p className="text-sm text-gray-500">
            This section will explore themes, references, writing choices, and the intent behind the verses.
          </p>
        </div>
      )}
    </section>
  );
}
