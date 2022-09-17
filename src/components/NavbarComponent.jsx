import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent({navbarItem}) {
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
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            {navbarItem.map(item=>{
              return <>
              <Nav.Link> <Link to={"/volee-home/match"}>{item}</Link></Nav.Link>
              </>
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;