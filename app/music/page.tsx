import { contentfulClient, getLatestSongSlug } from "@/lib/contentful";
import MusicClient from "./MusicClient";

export const dynamic = "force-dynamic";

export default async function MusicPage() {
  try {
    // 1️⃣ Fetch all projects
    const res = await contentfulClient.getEntries({
      content_type: "projects",
      order: ["fields.title"],
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

    // 2️⃣ Fetch latest song slug (GLOBAL)
    const latestSongSlug = await getLatestSongSlug();

    // 3️⃣ Pass everything to client
    return (
      <MusicClient
        projects={projects}
        latestSongSlug={latestSongSlug}
      />
    );
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
