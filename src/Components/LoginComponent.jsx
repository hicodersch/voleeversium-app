import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

function LoginComponent() {
  return (
    <Card style={{ width: "25rem" , height:"35rem"}}>
    
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
      <Card.Img style={{ width: "4rem" , height:"3rem"}} variant="top" src="/assets/login-logo.png" />
       {/*  <img
          alt=""
          src="/assets/logo.png"
          width="100"
          height="100"
          className="d-flex justify-content-md-center  align-top"
        /> */}
        <Card.Title>Login</Card.Title>
        <Form>
      <Form.Group className="d-felx flex-column justify-content-center mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="warning text-white" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginComponent;
