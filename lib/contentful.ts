import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

export async function getSongBySlug(slug: string) {
  const res = await client.getEntries({
    content_type: "song",
    "fields.slug": slug,
    limit: 1,
  });

  return res.items[0] ?? null;
}
