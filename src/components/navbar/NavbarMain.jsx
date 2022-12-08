import { Container, Nav, Navbar } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "../Logout";
import "./navbarmain.css";

const NavbarMain = () => {
  return (
    <>
      <Navbar
        className="navbar"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/home" style={{ fontWeight: "bold" }}>
            TheMovieDB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/upcoming">Upcoming</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Logout />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
