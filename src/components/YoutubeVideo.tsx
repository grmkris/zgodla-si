import React from 'react';

export const YoutubeVideo = (props: {
  videoId: string;
}) => {
  return (
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${props.videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}
