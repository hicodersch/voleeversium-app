import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './Role.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function TypesExample() {
    const navigate = useNavigate();

    const navigateToNonproLogin = ()=> navigate("/nonpro-login");
    const navigateToVoleeLogin = ()=> navigate("/volee-login");


  return (
    <Container fluid  className="flex-column d-flex align-items-center justify-content-center role-container"
    style={{backgroundImage:"linear-gradient(to right, #ccd3db, #fce7e8)"}}>
        
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
      <Row className="mb-5 justify-content-md-center">
        <Col  lg="6"  style={{ width: "20rem", height: "30rem"}} onClick={navigateToVoleeLogin}> <img style={{borderRadius:"10px"}}
          alt=""
          width="300"
          height="400"
          src="/assets/voolunteer.jpg"
/> 
       
        </Col>
        <Col  lg="6"  style={{ width: "20rem", height: "30rem"}} onClick={navigateToNonproLogin}> <img style={{borderRadius:"10px"}}
          alt=""
          width="300"
          height="400"
          src="/assets/voolunteer.jpg"
/> 
       
        </Col>
      </Row>
      
      
    </Container>
  );
}

export default TypesExample;

