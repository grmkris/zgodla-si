import { api } from "~/utils/api";
import { YoutubeVideo } from "~/components/YoutubeVideo";

export default function YoutubePage() {
  const videos = api.youtube.getVideos.useQuery({
    limit: 5,
  });

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      {videos.data?.playlistItems.items.map((video) => (
        <div key={video.id}>
          <YoutubeVideo videoId={video.contentDetails.videoId} />
        </div>
      ))}
    </div>
  );
}
