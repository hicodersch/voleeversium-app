import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginComponent from '../components/LoginComponent';
import './Login.css';
import RegisterComponent from '../components/RegisterComponent';

function Login() {

  

  const user ={
    userName:"volee",
    password:"volee"
  }

  return (
    <Container fluid  className="mt-5 flex-column d-flex align-items-center justify-content-center">
      <Row className="justify-content-center">
        <Col  lg="8">
        <img
          alt=""
          src="/assets/logo.png"
          width="300"
          height="200"
          className="align-top"/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col  lg="6">
        <LoginComponent/>
        </Col>
        <Col  lg="6">
        <RegisterComponent/>
        </Col>
      </Row>
    </Container>
  )
}

export default Login