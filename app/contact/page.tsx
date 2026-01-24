export default function ContactPage() {
  return (
    <section className="max-w-3xl space-y-10">
      
      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-gray-600">
          For collaborations, releases, or inquiries.
        </p>
      </div>

      {/* Contact Card */}
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm space-y-6">
        
        <div className="text-xs font-semibold tracking-widest text-gray-500">
          EMAIL
        </div>

        {/* Mail Button */}
<a
  href="mailto:dgabaworks@gmail.com"
  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8 py-4 text-base font-medium text-white transition"
>
  {/* Text */}
  <span className="transition-opacity duration-300 group-hover:opacity-0 text-gray-200">
    Mail Us
  </span>

  {/* Icon */}
  <span className="absolute flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
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
  </span>
</a>
        <p className="text-sm text-gray-600 max-w-md">
          Please include context, references, or timelines when reaching out.
        </p>
      </div>

    </section>
  );
}
