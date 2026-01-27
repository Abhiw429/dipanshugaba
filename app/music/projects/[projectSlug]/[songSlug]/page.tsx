import { getSongBySlug } from "../../../../../lib/contentful";
import SongClient from "./SongClient";

export default async function Page() {
  const res = await contentfulClient.getEntries({
    content_type: "song",
    "fields.slug": "camouflage-freeverse",
    limit: 1,
  });

  const song = res.items[0]?.fields;

  if (!song) {
    return <div className="max-w-5xl mx-auto p-10">Song not found</div>;
  }

  return <SongClient song={song} />;
}
