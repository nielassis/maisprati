import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const omdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await omdbApi.get("", {
      params: {
        s: query,
        page,
        type: "movie",
      },
    });

    if (response.data.Response === "True") {
      return {
        movies: response.data.Search,
        totalResults: parseInt(response.data.totalResults, 10),
      };
    } else {
      return {
        movies: [],
        totalResults: 0,
        error: response.data.Error,
      };
    }
  } catch (error) {
    return {
      movies: [],
      totalResults: 0,
      error: error.message,
    };
  }
};

export const getMovieById = async (imdbId) => {
  try {
    const response = await omdbApi.get("", {
      params: {
        i: imdbId,
        plot: "full",
      },
    });

    if (response.data.Response === "True") {
      return response.data;
    } else {
      return { error: response.data.Error };
    }
  } catch (error) {
    return { error: error.message };
  }
};

export default omdbApi;
