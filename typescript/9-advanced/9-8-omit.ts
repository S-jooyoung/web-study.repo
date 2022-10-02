{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data">;

  function WgetVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data...",
    };
  }

  function WgetVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
