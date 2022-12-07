import React, { useState, useEffect } from "react";
// import { getMovies } from "../../API";
import "./home.css";
import { Row, Container } from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import NavbarMain from "../../components/NavbarMain";

const Home = () => {
  return (
    <>
      <>
        <NavbarMain />
      </>
      <h1>Popular Movies</h1>
      <Container>
        <Row className="justify-content-lg-center">
          <MovieCard />
        </Row>
      </Container>
    </>
  );
};

export default Home;
