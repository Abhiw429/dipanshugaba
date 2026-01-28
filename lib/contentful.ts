import { createClient, type Asset } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

/* ================= PROJECTS ================= */

export async function getProjectBySlug(slug: string) {
  const res = await contentfulClient.getEntries({
    content_type: "projects",
    "fields.slug": slug,
    limit: 1,
  });

  return res.items.length ? res.items[0] : null;
}

/* ================= SONGS ================= */

export async function getSongsByProject(projectEntryId: string) {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.project.sys.id": projectEntryId,
    order: ["-sys.createdAt"], // newest first
  });

  return res.items.map((entry: any) => {
    const cover = entry.fields.coverart as Asset | undefined;

    return {
      title: entry.fields.title as string,
      slug: entry.fields.slug as string,
      coverArt: cover?.fields?.file?.url
        ? "https:" + cover.fields.file.url
        : undefined,
    };
  });
}

export async function getSongBySlug(songSlug: string) {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.slug": songSlug,
    limit: 1,
  });

  if (!res.items.length) return null;

  const entry: any = res.items[0];
  const cover = entry.fields.coverart as Asset | undefined;

  return {
    title: entry.fields.title as string,
    description: entry.fields.description as string | undefined,
    youtubeUrl: entry.fields.youtubeUrl as string | undefined,
    credits: entry.fields.credits as string | undefined,
    lyrics: entry.fields.lyrics as string | undefined,
    breakdown: entry.fields.breakdown as string | undefined,
    coverArt: cover?.fields?.file?.url
      ? {
          url: "https:" + cover.fields.file.url,
          title:
            typeof cover.fields.title === "string"
              ? cover.fields.title
              : undefined,
        }
      : undefined,
  };
}

/* ================= GLOBAL LATEST SONG ================= */

export async function getLatestSongSlug() {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    order: ["-sys.createdAt"], // 🔥 GLOBAL newest
    limit: 1,
  });

  if (!res.items.length) return null;

  return res.items[0].fields.slug as string;
}
