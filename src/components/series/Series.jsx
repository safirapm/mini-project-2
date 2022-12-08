import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { getSeries } from "../../API";

function SeriesCard() {
  const [popSeries, setSeries] = useState([]);

  useEffect(() => {
    getSeries().then((result) => {
      setSeries(result);
    });
  }, []);

  return (
    <>
      {popSeries.map((series, i) => {
        return (
          <Col xs lg="6" key={i} className="main-movie-container">
            <div className="movie-container">
              <div className="info-title">
                <h4>{series.name}</h4>
                <p>
                  Popularity: {series.popularity} <br />
                  ID: {series.id} <br />
                  {series.overview}
                </p>
                <button type="button" className="btn btn-light play-btn">
                  <i className="bi bi-play-fill"></i>Watch Now
                </button>
              </div>
              <div className="image-container">
                <img
                  src={`${process.env.REACT_APP_BASEIMGURL}${series.poster_path}`}
                />
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
}

export default SeriesCard;
