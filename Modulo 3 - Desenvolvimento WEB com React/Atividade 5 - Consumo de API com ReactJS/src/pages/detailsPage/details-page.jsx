import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../providers/omdbApi";
import { getStreamingAvailability } from "../../providers/streamAvailabilityApi";
import { CiStar, CiTrash, CiViewList, CiWarning } from "react-icons/ci";
import Loading from "../../components/common/loading/loading";
import "./details-page.css";
import getRatingColor from "../../helpers/getRatingColors";
import VideoPlayer from "./components/videoPlayer/video-player";
import { FavoriteMovie } from "./helpers/AddOnFavorite";

export default function DetailsPage() {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState(null);
  const [streaming, setStreaming] = useState(null);
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await getMovieById(imdbId);
      setMovie(movieData);
      console.log(movieData);

      const streamingData = await getStreamingAvailability(imdbId);
      setStreaming(streamingData.data?.streamingOptions);

      const favoriteMovie = new FavoriteMovie(
        imdbId,
        movieData.Title,
        movieData.Year,
        movieData.Poster
      );
      const favorite = await favoriteMovie.getFavorite();
      setIsFavorite(favorite.some((item) => item.imdbId === imdbId));
    };

    fetchData();
  }, [imdbId]);

  if (!movie) return <Loading />;

  const handleClick = async () => {
    if (isFavorite) {
      const favoriteMovie = new FavoriteMovie(
        imdbId,
        movie.Title,
        movie.Year,
        movie.Poster
      );
      await favoriteMovie.removeFavorite();
      setIsFavorite(false);
    } else {
      const favoriteMovie = new FavoriteMovie(
        imdbId,
        movie.Title,
        movie.Year,
        movie.Poster
      );
      await favoriteMovie.addFavorite();
      setIsFavorite(true);
    }
  };

  return (
    <div className="details-page">
      <div className="movie-info">
        <div className="poster">
          <div className="info-container">
            <div className="title">
              <h1>{movie.Title}</h1>
              <button
                onClick={() => handleClick()}
                style={{
                  backgroundColor: isFavorite ? "red" : "yellow",
                }}
                className="favorite-button"
              >
                {isFavorite ? (
                  <>
                    <CiTrash />
                    <p>Remove from favorites</p>
                  </>
                ) : (
                  <>
                    <CiStar />
                    <p>Add to favorites</p>
                  </>
                )}
              </button>
            </div>
            <p className="meta">
              {movie.Year} • {movie.Rated} • {movie.Runtime} • {movie.Genre}
            </p>
            <div className="ratings">
              <div className="rating">
                <span className="label">IMDB</span>
                <span className={`value ${getRatingColor(movie.imdbRating)}`}>
                  {movie.imdbRating}
                </span>
              </div>
              <div className="rating">
                <span className="label">Metacritic</span>
                <span className={`value ${getRatingColor(movie.Metascore)}`}>
                  {movie.Metascore}
                </span>
              </div>
            </div>

            {streaming?.us && streaming.us.length > 0 && (
              <div className="streaming">
                <h3>Available in:</h3>
                <div className="platforms">
                  <div className="platforms">
                    {streaming.us
                      .filter(
                        (item, index, self) =>
                          index ===
                          self.findIndex(
                            (i) => i.service.id === item.service.id
                          )
                      )
                      .map((item) => (
                        <a
                          key={item.service.id}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="platform"
                          style={{
                            backgroundColor: `rgba(255, 255, 255, 0.7)`,
                          }}
                        >
                          <img
                            src={item.service.imageSet.lightThemeImage}
                            alt={item.service.name}
                            width={40}
                            height={40}
                          />
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="banner"
            style={{
              backgroundImage:
                movie.Poster !== "N/A"
                  ? `url(${movie.Poster})`
                  : `url(https://via.placeholder.com/800x450?text=Sem+Imagem)`,
            }}
          ></div>
        </div>
        <p className="plot">{movie.Plot}</p>
      </div>

      <div className="stream">
        <button className="watch-here" onClick={() => setOpen(!open)}>
          <CiViewList />
          <p>Watch Here</p>
        </button>

        {open && (
          <div className="video-player">
            <div className="warn">
              <span>
                <CiWarning style={{ color: "red" }} />
                <h1>Some actions may trigger ads, please be careful.</h1>
              </span>
            </div>

            <VideoPlayer imdbId={movie.imdbID} />
          </div>
        )}
      </div>
    </div>
  );
}
