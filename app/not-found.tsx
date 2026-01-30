import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl space-y-6">
        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight">
          404
        </h1>

        {/* Divider */}
        <div className="mx-auto h-px w-16 bg-gray-300" />

        {/* Message */}
        <p className="text-gray-600 text-lg leading-relaxed">
          This page doesn’t exist —
          <br />
          or the music hasn’t been released yet.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/music"
            className="inline-flex items-center justify-center border px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            Go to Music
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center text-sm text-gray-500 hover:text-black transition"
          >
            Back to Home
          </Link>
        </div>

        {/* Subtle footer note */}
        <p className="pt-8 text-xs text-gray-400 italic">
          Sometimes silence is intentional. ~Abhi
        </p>
      </div>
    </main>
  );
}
