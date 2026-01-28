import { notFound } from "next/navigation";
import { contentfulClient } from "@/lib/contentful";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: { projectSlug: string };
}) {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.project.fields.slug": params.projectSlug,
  });

  if (!res.items.length) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold capitalize">
        {params.projectSlug.replace("-", " ")}
      </h1>

      <div className="space-y-4">
        {res.items.map((item: any) => {
          const slug = item.fields.slug;
          const title = item.fields.title;

          return (
            <Link
              key={slug}
              href={`/music/projects/${params.projectSlug}/${slug}`}
              className="block border rounded-xl p-4 hover:bg-gray-50"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
