import React from "react";
import "./movie-card.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=Sem+Imagem"
        }
        alt={movie.Title}
      />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
}
