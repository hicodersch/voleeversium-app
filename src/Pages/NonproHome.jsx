import React from "react";
import NavbarComponent from "../components/NavbarNpoComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
function NonproHome() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
        <NavbarComponent></NavbarComponent>
        <Container fluid className="mt-5 flex-column d-flex">
          <Row className="justify-content-center">
            <Col className="col-3 m-2 d-flex flex-column align-items-center justify-content-center">
              <Row>
                <img
                  style={{ borderRadius: "50%" }}
                  alt=""
                  src="/assets/wlw.png"
                  width="300"
                  height="300"
                />
              </Row>
            </Col>
            <Col className="lg=6">
              <Row>
                <h1>Details</h1>
                <hr></hr>
              </Row>
              <Row className="bg-light m-3">
                <Col>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Schaffhauserstrasse 470, 8052 Zürich
                    </ListGroup.Item>
                    <ListGroup.Item>+41 44 000 1519</ListGroup.Item>
                    <ListGroup.Item>info@wlw.ch</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NonproHome;