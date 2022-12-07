import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getMovies } from "../API";

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
          <Col key={i} xs lg="3">
            <Card style={{ width: "150px" }}>
              <Card.Img
                style={{ width: "150px" }}
                src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
                alt={movie.title}
              />
            </Card>
            <h5
              style={{
                fontSize: "16px",
                textAlign: "center",
                marginTop: "5px",
                marginBottom: "15px",
              }}
            >
              {movie.title}
            </h5>
          </Col>
        );
      })}
    </>
  );
}

// {popMovies.map((movie, i) => {
//     return (
//       <div key={i}>
//         <h1>{movie.title}</h1>
//         <br />
//         <img
//           style={{ width: "200px" }}
//           src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
//         />
//         <br />
//         <p>{movie.overview}</p>
//       </div>
//     );
//   });
// }
// )
// }
export default MovieCard;
