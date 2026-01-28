import {
  contentfulClient,
  getLatestSong,
} from "@/lib/contentful";
import MusicClient from "./MusicClient";

export const dynamic = "force-dynamic";

export default async function MusicPage() {
  try {
    // ✅ Latest song
    const latestSong = await getLatestSong();

    // ✅ Projects
    const projectsRes = await contentfulClient.getEntries({
      content_type: "projects",
      order: ["fields.title"],
    });

    const projects = projectsRes.items.map((entry: any) => ({
      title: entry.fields.title as string,
      slug: entry.fields.slug as string,
      coverArt: entry.fields.coverart?.fields?.file?.url
        ? "https:" + entry.fields.coverart.fields.file.url
        : undefined,
    }));

    // ✅ Singles (songs with NO project)
    const singlesRes = await contentfulClient.getEntries({
      content_type: "song",
      "fields.project[exists]": false,
      order: ["-sys.createdAt"],
    });

    const singles = singlesRes.items.map((entry: any) => {
      const cover = entry.fields.coverart;
      return {
        title: entry.fields.title,
        slug: entry.fields.slug,
        coverArt: cover?.fields?.file?.url
          ? "https:" + cover.fields.file.url
          : undefined,
      };
    });

    return (
      <MusicClient
        latest={latestSong}
        projects={projects}
        singles={singles}
      />
    );
  } catch (err) {
    console.error(err);
    return <p>Music unavailable</p>;
  }
}
