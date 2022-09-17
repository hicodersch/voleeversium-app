import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import EngageComponent from '../components/EngageComponent';
import NavbarComponent from '../components/NavbarVoleeComponent';
function Engage() {
  return (
   <>
   <NavbarComponent></NavbarComponent>
   <Container
      className="mt-5 flex-column d-flex align-items-center justify-content-center"
    >
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
          <EngageComponent></EngageComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <EngageComponent></EngageComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <EngageComponent></EngageComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <EngageComponent></EngageComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <EngageComponent></EngageComponent>
        </Col>
        <Col className="mt-5" lg="4">
          <EngageComponent></EngageComponent>
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default Engage