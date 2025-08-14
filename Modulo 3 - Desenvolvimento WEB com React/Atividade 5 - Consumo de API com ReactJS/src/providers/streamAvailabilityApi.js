import axios from "axios";

const API_KEY = import.meta.env.VITE_STREAMING_AVAILABILITY_KEY;
const BASE_URL = "https://streaming-availability.p.rapidapi.com";

const streamingApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
});

export const getStreamingAvailability = async (
  imdbId,
  country = "us",
  language = "en"
) => {
  try {
    const response = await streamingApi.get(`/shows/${imdbId}`, {
      params: {
        country,
        output_language: language,
      },
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response?.data || error.message,
    };
  }
};

export default streamingApi;
