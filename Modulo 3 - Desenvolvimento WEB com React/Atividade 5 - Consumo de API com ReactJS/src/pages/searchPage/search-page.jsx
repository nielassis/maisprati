import React, { useState } from "react";
import { searchMovies } from "../../provider/api";

import "./search-page.css";
import MovieCard from "../../components/common/movieCard/movie-card";
import Pagination from "./components/pagination/pagination";
import Loading from "../../components/common/loading/loading";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const moviesPerPage = 10;

  const fetchMovies = async (searchTerm, page = 1) => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);

    const result = await searchMovies(searchTerm, page);

    if (result.error) {
      setError(result.error);
      setMovies([]);
      setTotalResults(0);
    } else {
      setMovies(result.movies);
      setTotalResults(result.totalResults);
    }

    setLoading(false);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchMovies(query, 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchMovies(query, page);
  };

  const totalPages = Math.ceil(totalResults / moviesPerPage);

  return (
    <div className="container">
      <h1 className="page-title">Buscar Filmes</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {loading && <Loading />}
      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
