import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";

function VoleeHome() {
  const navbarVoleeItem = ["Profil", "Engage", "Bazaar"];
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
        <NavbarComponent navbarItem={navbarVoleeItem}></NavbarComponent>
        <Container fluid className="mt-5 flex-column d-flex ">
          <Row className="justify-content-center">
            <Col lg="4">
              <img
                alt=""
                src="/assets/profile-avatar.png"
                width="300"
                height="300"
              />
            </Col>
            <Col className="lg=6">
              <Row >
                <h1>Details</h1>
                <hr></hr>
              </Row> 
              <Row className="bg-light m-3">
                <Col>
                  <Form d-flex>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>From</Form.Label>
                      <Form.Control type="date" placeholder="Enter email" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form d-flex>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>To</Form.Label>
                      <Form.Control type="date" placeholder="Password" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="bg-light m-3">
                <h5 className="ml-2">Status</h5>
                <p> In Progress</p>
              </Row>
              <Row className="bg-light m-3">
                <h1>Skills</h1>
                <hr></hr>
              </Row>
              <Row className="bg-light m-3">
                <Col lg="2">
                  <Badge bg="primary">JavaScript</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="secondary">HTML</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="success">CSS</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="danger">React</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="warning" text="dark">
                    Node.js
                  </Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="info">Java</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="light" text="dark">
                    Python
                  </Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="dark">Angular</Badge>{" "}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default VoleeHome;
