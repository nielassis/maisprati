import React from "react";

export default function VideoPlayer({ imdbId }) {
  return (
    <iframe
      src={`https://superflixapi.digital/filme/${imdbId}`}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      scrolling="no"
      className="video-player"
    ></iframe>
  );
}
