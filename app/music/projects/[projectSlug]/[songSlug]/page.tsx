import { notFound } from "next/navigation";
import { getSongBySlug } from "../../../../../lib/contentful";
import SongClient from "./SongClient";

interface PageProps {
  params: {
    projectSlug: string;
    songSlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const song = await getSongBySlug(params.songSlug);

  // ❌ No song OR coming soon → block access
  if (!song || song.comingSoon === true) {
    notFound();
  }

  return <SongClient song={song} />;
}
