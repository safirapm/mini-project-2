import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export const getMovies = async () => {
  const movies = await axios.get(`${baseURL}movie/popular?api_key=${apiKey}`);
  return movies.data.results;
};

export const generateReq = async () => {
  const reqToken = await axios.get(
    `${baseURL}authentication/token/new?api_key=${apiKey}`
  );
  return reqToken.data.results;
};

export const validateReq = async () => {
  const validToken = await axios.get(
    `${baseURL}authentication/token/validate_with_login?api_key=${apiKey}`
  );
  return validToken.data.results;
};

export const generateSession = async () => {
  const genSession = await axios.get(
    `${baseURL}authentication/session/new?api_key=${apiKey}`
  );
  return genSession.data.results;
};
