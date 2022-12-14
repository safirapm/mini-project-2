import "./home.css";
import { Row, Container } from "react-bootstrap";
import MovieCard from "../../components/moviecard/MovieCard";
import NavbarMain from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import Series from "../../components/series/Series";

const Home = () => {
  return (
    <>
      <Container className="home-background">
        <NavbarMain />
        <div className="header">
          <div className="text-box">
            <h1 style={{ fontWeight: 600, marginBottom: "1px" }}>
              Welcome, <span>{localStorage.getItem("username")}.</span>
            </h1>
            <h3>Let's take on an adventure, shall we?</h3>
          </div>
        </div>
        <h2 className="popular-title">Popular Movies</h2>
        <Container>
          <Row>
            <MovieCard />
          </Row>
        </Container>
        <Container>
          <h2 className="popular-title" style={{ marginTop: "15px" }}>
            Popular Series
          </h2>
          <Row>
            <Series />
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
