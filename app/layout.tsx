import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        {/* Navbar */}
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg sm:text-xl font-bold tracking-wide">
              DIPANSHU GABA
            </Link>

            <nav className="flex gap-4 sm:gap-6 text-sm text-gray-600">
              <Link href="/music" className="hover:text-black">
                Music
              </Link>
              <Link href="/about" className="hover:text-black">
                About
              </Link>
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-300 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} Dipanshu Gaba
            <span className="mx-2">|</span>
            Designed &amp; Developed by{" "}
            <a
              href="mailto:contact@abhinavs.work.gd"
              className="underline hover:text-black transition"
            >
              Abhinav
            </a>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
