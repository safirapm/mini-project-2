import React, { useState, useEffect } from "react";
import { getMovies } from "../../API";
import "./home.css";
import NavbarMain from "../../components/NavbarMain";

const Home = () => {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    getMovies().then((result) => {
      setPopMovies(result);
    });
  }, []);

  return (
    <>
      <NavbarMain />
      <h1>Popular Movies</h1>
      {popMovies.map((movie, i) => {
        return (
          <div key={i}>
            <h1>{movie.title}</h1>
            <br />
            <img
              style={{ width: "200px" }}
              src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
            />
            <br />
            <p>{movie.overview}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
