import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function ProvoleeComponent() {
  return (
    <Card style={{ width: "25rem", height: "35rem" }}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Img
          className="rounded-circle"
          style={{ width: "10rem", height: "10rem" }}
          variant="top"
          src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
        />
        <Card.Title>User Name</Card.Title>
        <Card.Text>Senior Developer</Card.Text>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel s
        </Card.Text>
        <Card.Img
          style={{ width: "8rem", height: "5rem" }}
          variant="top"
          src="/assets/star.png"
        />
        <Form>
          <Container
            fluid
            className="mt-5 flex-column d-flex align-items-center justify-content-center"
          >
            <Row className="justify-content-center">
              <Col lg="6">
                <Button variant="success text-white" type="submit">
                  Match
                </Button>
              </Col>
              <Col lg="6">
                <Button variant="warning text-white" type="submit">
                  Pass
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProvoleeComponent;
