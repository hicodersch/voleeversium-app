import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProvoleeComponent from "../components/ProvoleeComponent";
import Form from "react-bootstrap/Form";
import NavbarComponent from "../components/NavbarNpoComponent";

function MatchProVolee() {
  return (
    <>
    <NavbarComponent></NavbarComponent>
    <Container className="mt-5 flex-column d-flex align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Skills</Form.Label>
            <Form.Control type="email" placeholder="#English" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>From</Form.Label>
            <Form.Control type="email" placeholder="13.10.2022 22:30" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>To</Form.Label>
            <Form.Control type="email" placeholder="13.10.2022 22:30" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Language</Form.Label>
            <Form.Control type="email" placeholder="German" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="mt-5" lg="4">
          <ProvoleeComponent></ProvoleeComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <ProvoleeComponent></ProvoleeComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <ProvoleeComponent></ProvoleeComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <ProvoleeComponent></ProvoleeComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <ProvoleeComponent></ProvoleeComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <ProvoleeComponent></ProvoleeComponent>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default MatchProVolee;
