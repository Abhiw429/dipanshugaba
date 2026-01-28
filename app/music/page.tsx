import { contentfulClient } from "@/lib/contentful";
import MusicClient from "./MusicClient";

export const dynamic = "force-dynamic";

export default async function MusicPage() {
  try {
    const res = await contentfulClient.getEntries({
      content_type: "project",
    });

    const projects = res.items.map((entry: any) => ({
      title: entry.fields.title as string,
      slug: entry.fields.slug as string,
      status: entry.fields.status as string | undefined,
      coverArt:
        entry.fields.coverart?.fields?.file?.url
          ? "https:" + entry.fields.coverart.fields.file.url
          : undefined,
    }));

    return <MusicClient projects={projects} />;
  } catch (error) {
    console.error("Contentful error on /music:", error);

    return (
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Music</h1>
        <p className="text-sm text-gray-500">
          Music content is temporarily unavailable.
        </p>
      </section>
    );
  }
}
