import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wide">
              DIPANSHU GABA
            </Link>

            <nav className="space-x-6 text-sm text-gray-600">
              <Link href="/music" className="hover:text-black">Music</Link>
              <Link href="/about" className="hover:text-black">About</Link>
              <Link href="/contact" className="hover:text-black">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} Dipanshu Gaba
        </footer>
      </body>
    </html>
  );
}
