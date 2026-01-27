import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

export async function getSongBySlug(
  projectSlug: string,
  songSlug: string
) {
  const entries = await client.getEntries({
    content_type: "song",
    "fields.slug": songSlug,
    "fields.project.fields.slug": projectSlug,
    limit: 1,
    include: 2,
  });

  if (!entries.items.length) {
    return null;
  }

  const song = entries.items[0];

  return {
    title: song.fields.title,
    description: song.fields.description || "",
    youtubeUrl: song.fields.youtubeUrl || "",
    lyrics: song.fields.lyrics || "",
    breakdown: song.fields.breakdown || "",
    credits: song.fields.credits || "",
    coverArt: song.fields.coverArt
      ? {
          url: "https:" + song.fields.coverArt.fields.file.url,
          title: song.fields.coverArt.fields.title,
        }
      : null,
  };
}
