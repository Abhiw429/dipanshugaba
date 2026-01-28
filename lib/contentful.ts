import { createClient, type Asset, type Entry } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

/* ---------------- PROJECTS ---------------- */

export async function getAllProjects() {
  const res = await contentfulClient.getEntries({
    content_type: "project",
    order: ["fields.title"],
  });

  return res.items.map((entry: any) => {
    const cover = entry.fields.coverart as Asset | undefined;

    return {
      title: entry.fields.title as string,
      slug: entry.fields.slug as string,
      description: entry.fields.description as string | undefined,
      coverArt: cover?.fields?.file?.url
        ? "https:" + cover.fields.file.url
        : null,
    };
  });
}

export async function getProjectBySlug(slug: string) {
  const res = await contentfulClient.getEntries({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });

  if (!res.items.length) return null;
  return res.items[0];
}

/* ---------------- SONGS ---------------- */

export async function getSongsByProject(projectEntryId: string) {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.project.sys.id": projectEntryId,
    order: ["fields.title"],
  });

  return res.items.map((entry: any) => {
    const cover = entry.fields.coverart as Asset | undefined;

    return {
      title: entry.fields.title,
      slug: entry.fields.slug,
      coverArt: cover?.fields?.file?.url
        ? "https:" + cover.fields.file.url
        : null,
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
    title: entry.fields.title,
    description: entry.fields.description,
    youtubeUrl: entry.fields.youtubeUrl,
    credits: entry.fields.credits,
    lyrics: entry.fields.lyrics,
    breakdown: entry.fields.breakdown,
    coverArt: cover?.fields?.file?.url
      ? {
          url: "https:" + cover.fields.file.url,
          title: cover.fields.title,
        }
      : null,
  };
}
