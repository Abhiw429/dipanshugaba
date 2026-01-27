import { getSongBySlug } from "../../../../../lib/contentful";
import SongClient from "./SongClient";

export default async function Page({
  params,
}: {
  params: { projectSlug: string; songSlug: string };
}) {
  const entry = await getSongBySlug(params.songSlug);

  if (!entry) {
    return <div>Song not found</div>;
  }

  const song = {
    title: entry.fields.title,
    description: entry.fields.description,
    youtubeUrl: entry.fields.youtubeUrl,
    lyrics: entry.fields.lyrics,
    breakdown: entry.fields.breakdown,
    credits: entry.fields.credits,
    coverArt: entry.fields.coverArt
      ? {
          url: "https:" + entry.fields.coverArt.fields.file.url,
          title: entry.fields.coverArt.fields.title,
        }
      : undefined,
  };

  return <SongClient song={song} />;
}
