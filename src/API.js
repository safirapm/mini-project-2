import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export const getMovies = async () => {
  const movies = await axios.get(`${baseURL}movie/popular?api_key=${apiKey}`);
  return movies.data.results;
};
