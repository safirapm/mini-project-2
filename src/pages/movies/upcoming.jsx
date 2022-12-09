import Carousel from "../../components/carousel/Carousel";
import NavbarMain from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getUpcoming } from "../../API";

const Upcoming = () => {
  const [comingSoon, setUpcoming] = useState([]);

  useEffect(() => {
    getUpcoming().then((result) => {
      setUpcoming(result);
    });
  }, []);

  return (
    <>
      <Container className="home-background">
        <NavbarMain />
        <Carousel />
        <div>
          <h1 className="popular-title">Upcoming Series</h1>
          <Container>
            <Row>
              {comingSoon.map((upcoming, i) => {
                return (
                  <Col xs lg="6" key={i} className="main-movie-container">
                    <div className="movie-container">
                      <div className="info-title">
                        <h4>{upcoming.title}</h4>
                        <p>
                          Popularity: {upcoming.popularity} <br />
                          ID: {upcoming.id} <br />
                          {upcoming.overview}
                        </p>
                        <button
                          type="button"
                          className="btn btn-light play-btn"
                        >
                          <i className="bi bi-play-fill"></i>Trailer
                        </button>
                      </div>
                      <div className="image-container">
                        <img
                          src={`${process.env.REACT_APP_BASEIMGURL}${upcoming.poster_path}`}
                          alt={upcoming.title}
                        />
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default Upcoming;
