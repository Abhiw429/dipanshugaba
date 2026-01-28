import { contentfulClient } from "@/lib/contentful";
import MusicClient from "./MusicClient";

export const dynamic = "force-dynamic"; // 🔥 THIS FIXES THE ERROR

export default async function MusicPage() {
  const res = await contentfulClient.getEntries({
    content_type: "project",
  });

  const projects = res.items.map((entry: any) => ({
    title: entry.fields.title,
    slug: entry.fields.slug,
    status: entry.fields.status,
    coverArt: entry.fields.coverart?.fields?.file?.url
      ? "https:" + entry.fields.coverart.fields.file.url
      : null,
  }));

  return <MusicClient projects={projects} />;
}
