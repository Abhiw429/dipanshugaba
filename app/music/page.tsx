import { contentfulClient, getLatestSong } from "@/lib/contentful";
import MusicClient from "./MusicClient";

export const dynamic = "force-dynamic";

export default async function MusicPage() {
  try {
    /* ================= LATEST (GLOBAL) ================= */
    const latestSong = await getLatestSong();

    /* ================= PROJECTS ================= */
    const projectsRes = await contentfulClient.getEntries({
      content_type: "projects",
    });

    const projectsWithDates = await Promise.all(
      projectsRes.items.map(async (project: any) => {
        const songsRes = await contentfulClient.getEntries({
          content_type: "song",
          "fields.project.sys.id": project.sys.id,
          order: ["-sys.createdAt"],
          limit: 1,
        });

        return {
          title: project.fields.title as string,
          slug: project.fields.slug as string,
          status: project.fields.status === true, // boolean
          coverArt: project.fields.coverart?.fields?.file?.url
            ? "https:" + project.fields.coverart.fields.file.url
            : undefined,
          latestSongDate: songsRes.items[0]?.sys.createdAt ?? null,
        };
      })
    );

    // newest project first (based on latest song inside project)
    const projects = projectsWithDates.sort((a, b) => {
      if (!a.latestSongDate) return 1;
      if (!b.latestSongDate) return -1;
      return (
        new Date(b.latestSongDate).getTime() -
        new Date(a.latestSongDate).getTime()
      );
    });

    /* ================= SINGLES ================= */
    const singlesRes = await contentfulClient.getEntries({
      content_type: "song",
      "fields.project[exists]": false,
      order: ["-sys.createdAt"], // newest first
    });

    const singles = singlesRes.items.map((entry: any) => ({
      title: entry.fields.title as string,
      slug: entry.fields.slug as string,
      coverArt: entry.fields.coverart?.fields?.file?.url
        ? "https:" + entry.fields.coverart.fields.file.url
        : undefined,
    }));

    return (
      <MusicClient
        latest={latestSong}
        projects={projects}
        singles={singles}
      />
    );
  } catch (error) {
    console.error("Music page error:", error);

    return (
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Music</h1>
        <p className="text-sm text-gray-500">
          Music content is temporarily unavailable.
        </p>
      </section>
    );
  }
}
