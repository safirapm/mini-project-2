import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export const getMovies = async () => {
  const movies = await axios.get(`${baseURL}movie/popular?api_key=${apiKey}`);
  return movies.data.results;
};

export const getSeries = async () => {
  const series = await axios.get(`${baseURL}tv/popular?api_key=${apiKey}`);
  return series.data.results;
};

export const getUpcoming = async () => {
  const upcoming = await axios.get(
    `${baseURL}movie/upcoming?api_key=${apiKey}`
  );
  return upcoming.data.results;
};
