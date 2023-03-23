import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import Youtube from "youtube.ts";
import { env } from "~/env.mjs";
import { z } from "zod";

const youtube = new Youtube(env.YOUTUBE_API_KEY);

const getVideosHandler = async (props: { limit: number; cursor?: number }) => {
  const { limit, cursor } = props;
  const channelByCustomURL = await youtube.channels.get(
    "https://www.youtube.com/@ZgodovinaNaKratko"
  );
  const uploads = channelByCustomURL.contentDetails.relatedPlaylists.uploads;
  const playlistItems = await youtube.playlists.items(uploads, {
    playlistId: uploads,
    maxResults: limit.toString() || "50",
    pageToken: cursor?.toString() || undefined,
  });
  return {
    playlistItems,
  };
};

export const youtubeRouter = createTRPCRouter({
  getVideos: publicProcedure
    .input(
      z.object({
        limit: z.number().catch(() => 100), // <-- "limit" needs to exist, but can be any type (e.g. "50"
        cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor } = input;
      return getVideosHandler({
        limit: limit || 50,
        cursor: cursor || undefined,
      });
    }),
});
