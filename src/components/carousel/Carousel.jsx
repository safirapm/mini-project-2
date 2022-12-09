import React from "react";
import { Carousel } from "react-bootstrap";

function UpcomingHeader() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://image.tmdb.org/t/p/original/kc4Tuc0aONtPOqOs0PAPQGmJren.jpg"
            alt="The Whale"
          />
          <Carousel.Caption>
            <h3 style={{ marginBottom: "1px" }}>Coming Soon</h3>
            <h5>The Whale</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://image.tmdb.org/t/p/original/vNPY4oCSUp7CxbHkKJNRx1fmCl0.jpg"
            alt="Triangle of Sadness"
          />
          <Carousel.Caption>
            <h3 style={{ marginBottom: "1px" }}>Coming Soon</h3>
            <h5>Triangle of Sadness</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg"
            alt="Top Gun: Maverick"
          />
          <Carousel.Caption>
            <h3 style={{ marginBottom: "1px" }}>Coming Soon</h3>
            <h5>Top Gun: Maverick</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default UpcomingHeader;
