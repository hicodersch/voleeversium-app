import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import VoleService from "../service/voleeService";
import nonProService from "../service/nonProService";

import { useLocation, useNavigate } from "react-router-dom";



function Signup() {

  const location = useLocation();


  const [user, setUser]=useState({})
  
const handleOnChange = (e)=>{
  setUser({...user, [e.target.name]:e.target.value})

}

const handleSubmit = (e)=>{
  e.preventDefault()
  if(location.pathname==="/volee-signup"){
     addUser()
  }
  addNPO()

 navigateToLogin()

}

const addNPO = ()=>{
  nonProService.createNonpro(user)
 }
const addUser = ()=>{
 VoleService.createVole(user)
}

const navigate = useNavigate();

const navigateToLogin = ()=> {location.pathname==="/volee-signup" ? navigate("/volee-login"):navigate("/nonPro-login")}


  return (
    <Container  fluid  className="flex-column d-flex align-items-center justify-content-center"    style={{backgroundImage:"linear-gradient(to right, #ccd3db, #fce7e8)", width: "100%", height: "100vh"}}>

    <Card style={{ width: "25rem", height: "35rem" }}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Img
          style={{ width: "4rem", height: "3rem" }}
          variant="top"
          src="/assets/login-logo.png"
        />
        <Card.Title>Sign Up</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="d-felx flex-column justify-content-center mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleOnChange} type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleOnChange} type="password" name="password" placeholder="Password" />
          </Form.Group>
      
          <Button variant="warning text-white" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </Container>

  );
}

export default Signup;
