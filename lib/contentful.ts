import { createClient, type Asset } from "contentful";

/* ----------------------------------------
   Contentful client
---------------------------------------- */

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

/* ----------------------------------------
   SONG
---------------------------------------- */

export async function getSongBySlug(songSlug: string) {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.slug": songSlug,
    limit: 1,
  });

  if (!res.items.length) return null;

  const entry = res.items[0];

  // ⚠️ field ID is `coverart` (lowercase)
  const coverAsset = entry.fields.coverart as Asset | undefined;

  return {
    title: entry.fields.title as string,

    description: entry.fields.description as string | undefined,
    youtubeUrl: entry.fields.youtubeUrl as string | undefined,
    credits: entry.fields.credits as string | undefined,

    // lyrics & breakdown come as plain text / markdown
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

/* ----------------------------------------
   PROJECT (EP / Album)
---------------------------------------- */

export async function getProjectBySlug(projectSlug: string) {
  const res = await contentfulClient.getEntries({
    content_type: "project",
    "fields.slug": projectSlug,
    include: 2, // important: resolve linked songs
    limit: 1,
  });

  if (!res.items.length) return null;

  const project = res.items[0];

  const coverAsset = project.fields.coverart as Asset | undefined;

  return {
    title: project.fields.title as string,

    description: project.fields.description as string | undefined,
    status: project.fields.status as "ongoing" | "completed" | undefined,

    coverArt: coverAsset?.fields?.file?.url
      ? {
          url: "https:" + coverAsset.fields.file.url,
          title: coverAsset.fields.title as string | undefined,
        }
      : undefined,

    // linked songs (tracklist)
    tracks: Array.isArray(project.fields.tracks)
      ? project.fields.tracks.map((track: any) => ({
          title: track.fields.title as string,
          slug: track.fields.slug as string,
          type: track.fields.type as string | undefined,
        }))
      : [],
  };
}
