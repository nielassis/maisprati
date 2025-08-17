import React, { useEffect, useState } from "react";
import { FavoriteMovie } from "../../helpers/AddOnFavorite";
import Loading from "../../components/common/loading/loading";
import MovieCard from "../../components/common/movieCard/movie-card";
import "./favorites-page.css";

export default function FavoritesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const movies = new FavoriteMovie();
      try {
        const data = await movies.getFavorite();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="container">
      <h1>My Favorites</h1>
      <p>This page will show your favorite movies.</p>

      {loading && <Loading />}

      <div className="cards">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
