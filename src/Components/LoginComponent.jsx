import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import VoleService from "../service/voleeService";
import nonProService from "../service/nonProService";
import { useNavigate } from "react-router-dom";

function LoginComponent(props) {

  const [user, setUser]=useState({})

  const [allowLogin, setAllowLogin]=useState(false);

  useEffect(() => {
   if(allowLogin)
   navigateToHome()
    
  }, [allowLogin])
  
  
const handleOnChange = (e)=>{
  setUser({...user, [e.target.name]:e.target.value})

}

const handleSubmit = async (e)=>{
  let allowLogin;
  e.preventDefault()
  if(props.location==="/volee-login"){
     allowLogin =  await VoleService.checkVole(user);
  }else{
    allowLogin =  await nonProService.checkNonpro(user);
  }

setAllowLogin(allowLogin.allowLogin)
}


const navigate = useNavigate();

const navigateToHome = ()=> {props.location==="/volee-login" ? navigate("/volee-home"):navigate("/nonPro-home")}



  return (
    <Container fluid  className="mt-5 flex-column d-flex align-items-center justify-content-center">

    <Card style={{ width: "25rem", height: "35rem" }}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Img
          style={{ width: "4rem", height: "3rem" }}
          variant="top"
          src="/assets/login-logo.png"
        />
        <Card.Title>Login</Card.Title>
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

export default LoginComponent;
