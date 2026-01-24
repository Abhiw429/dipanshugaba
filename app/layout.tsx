"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <nav className="bg-white border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold">
              DIPANSHU GABA
            </Link>

            <div className="hidden md:flex space-x-6 text-sm">
              <Link href="/music" className="link">Music</Link>
              <Link href="/about" className="link">About</Link>
              <Link href="/contact" className="link">Contact</Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden border px-3 py-1 rounded"
            >
              Menu
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 py-4 space-y-3 border-t">
              <Link href="/music" onClick={() => setOpen(false)}>Music</Link><br />
              <Link href="/about" onClick={() => setOpen(false)}>About</Link><br />
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          )}
        </nav>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {children}
        </main>

        <footer className="text-center text-sm text-zinc-500 py-6 border-t">
          © {new Date().getFullYear()} Dipanshu Gaba
        </footer>
      </body>
    </html>
  );
}
