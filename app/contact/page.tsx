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

        <a
          href="mailto:dgabaworks@gmail.com"
          className="text-2xl font-medium text-gray-900 hover:underline underline-offset-4"
        >
          dgabaworks@gmail.com
        </a>

        <p className="text-sm text-gray-600 max-w-md">
          Please include context, references, or timelines when reaching out.
        </p>
      </div>

    </section>
  );
}
