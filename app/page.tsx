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

      {/* Image + Socials */}
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/images/hero.jpg"
          alt="Dipanshu Gaba"
          width={500}
          height={600}
          className="rounded-xl"
          priority
        />

        {/* Social Links */}
        <div className="flex gap-6 items-center">
          
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@dipanshugaba26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-gray-600 hover:text-black transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.996 2.996 0 00-2.108-2.118C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.39.568A2.996 2.996 0 00.502 6.186 31.4 31.4 0 000 12a31.4 31.4 0 00.502 5.814 2.996 2.996 0 002.108 2.118C4.47 20.5 12 20.5 12 20.5s7.53 0 9.39-.568a2.996 2.996 0 002.108-2.118A31.4 31.4 0 0024 12a31.4 31.4 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dipanshu.gaba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-black transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1 1 0 110 2 1 1 0 010-2z"/>
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com/dipanshugaba26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-gray-600 hover:text-black transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2H21.78l-7.53 8.61L23.5 22h-7.22l-5.65-6.8L4.7 22H1.16l8.05-9.2L.5 2h7.4l5.1 6.2L18.244 2zm-1.27 18h1.96L7.1 4H5.02l11.954 16z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:dgabaworks@gmail.com"
            aria-label="Email"
            className="text-gray-600 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </a>

        </div>
      </div>

    </section>
  );
}
