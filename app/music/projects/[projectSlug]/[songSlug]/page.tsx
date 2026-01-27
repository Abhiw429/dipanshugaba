import { getSongBySlug } from "../../../../../lib/contentful";
import { notFound } from "next/navigation";
import type { Asset } from "contentful";
import SongClient from "./SongClient";

interface PageProps {
  params: {
    projectSlug: string;
    songSlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { songSlug } = params;

  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.slug": songSlug,
    limit: 1,
  });

  if (!res.items.length) {
    notFound();
  }

  const entry = res.items[0];

  // 🔹 Safely narrow Asset type
  const coverAsset = entry.fields.coverArt as Asset | undefined;

  const song = {
    title: entry.fields.title as string,
    description: entry.fields.description as string | undefined,
    youtubeUrl: entry.fields.youtubeUrl as string | undefined,
    credits: entry.fields.credits as string | undefined,
    lyrics: entry.fields.lyrics as string | undefined,
    breakdown: entry.fields.breakdown as string | undefined,

    coverArt: coverAsset?.fields?.file?.url
      ? {
          url: "https:" + coverAsset.fields.file.url,
          title: coverAsset.fields.title as string | undefined,
        }
      : undefined,
  };

  return <SongClient song={song} />;
}
