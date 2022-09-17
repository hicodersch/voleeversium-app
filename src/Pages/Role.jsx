import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './Role.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TypesExample() {
    const navigate = useNavigate();

    const navigateToNonproLogin = ()=> navigate("/nonpro-login");
    const navigateToVoleeLogin = ()=> navigate("/volee-login");


  return (
    <Container fluid  className="flex-column d-flex align-items-center justify-content-center role-container">
        
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
      <Row className="mb-12 justify-content-md-center">
        <Col lg="6" onClick={navigateToVoleeLogin} className="role"> 
          <img style={{borderRadius:"10px"}}
            alt=""
            width="300"
            src="/assets/volee.png"/> <br />
            <h1>Volee</h1>
        </Col>
        <Col  lg="6"  onClick={navigateToNonproLogin} className="role"> 
          <img style={{borderRadius:"10px"}}
            alt=""
            width="300"
            src="/assets/npo.png"/> <br />
            <h1>NPO</h1>
        </Col>
      </Row>
      
      
    </Container>
  );
}

export default TypesExample;

