import { notFound } from "next/navigation";
import { getSongBySlug } from "@/lib/contentful";
import SongClient from "../projects/[projectSlug]/[songSlug]/SongClient";

type PageProps = {
  params: {
    songSlug: string;
  };
};

export default async function SingleSongPage({ params }: PageProps) {
  const song = await getSongBySlug(params.songSlug);

  // 🚫 HARD BLOCK
  if (!song || song.comingSoon === true) {
    notFound();
  }

  return <SongClient song={song} />;
}
