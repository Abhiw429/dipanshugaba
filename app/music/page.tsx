import { contentfulClient } from "@/lib/contentful";
import MusicClient from "./MusicClient";

export default async function MusicPage() {
  const res = await contentfulClient.getEntries({
    content_type: "project",
  });

  const projects = res.items.map((entry: any) => ({
    title: entry.fields.title,
    slug: entry.fields.slug,
    coverArt:
      entry.fields.coverart?.fields?.file?.url
        ? "https:" + entry.fields.coverart.fields.file.url
        : null,
    status: entry.fields.status,
  }));

  return <MusicClient projects={projects} />;
}
