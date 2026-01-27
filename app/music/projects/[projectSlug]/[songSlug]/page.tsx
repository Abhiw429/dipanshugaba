import { getSongBySlug } from "../../../../../lib/contentful";
import SongClient from "./SongClient";

type PageProps = {
  params: {
    projectSlug: string;
    songSlug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const song = await getSongBySlug(params.songSlug);

  if (!song) {
    return <div className="p-10">Song not found</div>;
  }

  return <SongClient song={song} />;
}
