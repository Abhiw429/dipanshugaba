"use client";

import { useEffect, useState } from "react";

/* 🔁 RELEASE DATE */
const RELEASE_DATE = new Date("2026-01-26T00:00:00");

function getTimeLeft() {
  const diff = RELEASE_DATE.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function SongPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="space-y-8 max-w-3xl">

      {/* Title */}
      <h1 className="text-2xl font-bold">Camouflage (Freeverse)</h1>

      {/* Streaming Buttons */}
      <div className="flex gap-4 flex-wrap">

        {/* YouTube */}
        <a
          href="https://youtu.be/aZblaDVPMXU?si=YfJU1LqeGuHhv7j3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border px-5 py-3 rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a2.996 2.996 0 00-2.108-2.118C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.39.568A2.996 2.996 0 00.502 6.186 31.4 31.4 0 000 12a31.4 31.4 0 00.502 5.814 2.996 2.996 0 002.108 2.118C4.47 20.5 12 20.5 12 20.5s7.53 0 9.39-.568a2.996 2.996 0 002.108-2.118A31.4 31.4 0 0024 12a31.4 31.4 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
          </svg>
          <span>Listen on YouTube</span>
        </a>

        {/* Spotify */}
        <a
  href={!timeLeft ? "https://open.spotify.com" : undefined}
  className={`flex items-center gap-3 border px-5 py-3 rounded-full text-sm transition min-w-[200px] ${
    timeLeft
      ? "text-gray-700 cursor-default"
      : "hover:bg-black hover:text-white"
  }`}
>
  {/* Spotify Icon */}
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.47 17.3c-.22.36-.69.48-1.05.26-2.88-1.77-6.5-2.17-10.77-1.18-.41.09-.82-.16-.91-.57-.1-.41.16-.82.57-.91 4.67-1.07 8.7-.61 11.9 1.33.36.22.48.69.26 1.05zm1.5-3.33c-.28.45-.86.59-1.31.31-3.3-2.03-8.33-2.62-12.23-1.43-.51.15-1.05-.14-1.2-.65-.15-.51.14-1.05.65-1.2 4.46-1.35 9.98-.69 13.8 1.66.45.28.59.86.31 1.31zm.13-3.47C15.28 8.2 8.6 7.98 4.96 9.1c-.61.18-1.26-.16-1.44-.77-.18-.61.16-1.26.77-1.44 4.18-1.27 11.15-1.03 15.57 1.61.56.34.74 1.06.4 1.62-.34.56-1.06.74-1.62.4z"/>
  </svg>

  {timeLeft ? (
    <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
  ) : (
    <span>Listen on Spotify</span>
  )}
</a>

        {/* Apple Music */}
       <a
  href={!timeLeft ? "https://music.apple.com" : undefined}
  className={`flex items-center gap-3 border px-5 py-3 rounded-full text-sm transition min-w-[200px] ${
    timeLeft
      ? "text-gray-700 cursor-default"
      : "hover:bg-black hover:text-white"
  }`}
>
  {/* Apple Music Icon */}
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.365 1.43c0 1.14-.52 2.29-1.3 3.13-.77.83-2.02 1.48-3.17 1.38-.15-1.07.44-2.21 1.19-3.03.83-.9 2.18-1.55 3.28-1.48zM20.75 17.09c-.32.74-.7 1.46-1.15 2.15-.61.92-1.11 1.55-1.5 1.88-.6.54-1.24.82-1.92.84-.49 0-1.08-.14-1.78-.42-.7-.28-1.34-.42-1.94-.42-.62 0-1.28.14-2 .42-.72.28-1.3.43-1.75.45-.65.03-1.3-.26-1.96-.87-.42-.37-.94-1.02-1.56-1.96-.67-1.01-1.22-2.18-1.66-3.51-.47-1.43-.7-2.81-.7-4.14 0-1.53.33-2.85 1-3.95.52-.9 1.21-1.6 2.08-2.11.87-.51 1.81-.77 2.82-.79.55 0 1.27.17 2.16.51.89.34 1.46.51 1.71.51.19 0 .82-.2 1.88-.6.99-.36 1.83-.51 2.51-.45 1.86.15 3.26.89 4.2 2.22-1.66 1.01-2.48 2.43-2.46 4.27.02 1.43.53 2.62 1.53 3.56.45.44.95.78 1.51 1.01z"/>
  </svg>

  {timeLeft ? (
    <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
  ) : (
    <span>Listen on Apple Music</span>
  )}
</a>
      </div>

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

      {/* Lyrics */}
      <h3 className="text-2xl font-bold">LYRICS :</h3>
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

    </section>
  );
}
