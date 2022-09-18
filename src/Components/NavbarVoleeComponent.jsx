import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/assets/logo.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/volee-home">Profil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/engage">Engage</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/volee-bazar">Bazaar</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
