import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { getMovies } from "../../API";
import "./moviecard.css";

function MovieCard() {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    getMovies().then((result) => {
      setPopMovies(result);
    });
  }, []);

  return (
    <>
      {popMovies.map((movie, i) => {
        return (
          <Col xs lg="6" key={i} className="main-movie-container">
            <div className="movie-container">
              <div className="info-title">
                <h4>{movie.title}</h4>
                <p>
                  Popularity: {movie.popularity} <br />
                  ID: {movie.id} <br />
                  {movie.overview}
                </p>
                <button type="button" className="btn btn-light play-btn">
                  <i className="bi bi-play-fill"></i>Watch Now
                </button>
              </div>
              <div className="image-container">
                <img
                  src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
}

export default MovieCard;
