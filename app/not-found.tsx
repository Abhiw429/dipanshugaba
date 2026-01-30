import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold tracking-tight">404</h1>

      <p className="mt-4 text-gray-500 text-lg max-w-md">
        The page you’re looking for doesn’t exist or hasn’t been released yet.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center border px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition"
      >
        Go back home
      </Link>
    </main>
  );
}
