import React from "react";
import { useNavigate } from "react-router-dom";
import "./movie-card.css";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${movie.imdbID}`);
  };

  return (
    <div
      className="movie-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
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
