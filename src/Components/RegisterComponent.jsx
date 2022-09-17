import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function RegisterComponent() {
  return (
    <Card
      className="d-flex flex-column justify-content-center align-items-center bg-warning"
      style={{ width: "25rem", height: "35rem" }}
    >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        {/*  <img
          alt=""
          src="/assets/logo.png"
          width="100"
          height="100"
          className="d-flex justify-content-md-center  align-top"
        /> */}
        <Card.Title>Sign Up</Card.Title>
        <Card.Text>Sign Up here if you don't have account</Card.Text>
        <Button  style={{ backgroundColor:"orange" }} variant="warning text-white" type="submit">
          Sign Up
        </Button>
        <Form></Form>
      </Card.Body>
    </Card>
  );
}

export default RegisterComponent;
