import { createClient, type Asset } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getSongBySlug(songSlug: string) {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.slug": songSlug,
    limit: 1,
  });

  if (!res.items.length) return null;

  const entry = res.items[0];
  const coverAsset = entry.fields.coverArt as Asset | undefined;

  return {
    title: entry.fields.title as string,
    description: entry.fields.description as string | undefined,
    youtubeUrl: entry.fields.youtubeUrl as string | undefined,
    credits: entry.fields.credits as string | undefined,
    lyrics: entry.fields.lyrics as string | undefined,
    breakdown: entry.fields.breakdown as string | undefined,
    project: entry.fields.project ?? null,

    coverArt: coverAsset?.fields?.file?.url
      ? {
          url: "https:" + coverAsset.fields.file.url,
          title: coverAsset.fields.title as string | undefined,
        }
      : undefined,
  };
}
