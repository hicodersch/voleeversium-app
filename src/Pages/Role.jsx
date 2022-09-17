import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TypesExample() {
    const navigate = useNavigate();

    const navigateToNonproLogin = ()=> navigate("/nonpro-login");
    const navigateToVoleeLogin = ()=> navigate("/volee-login");


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
        <Button  style={{ width: "25rem", height: "35rem" }} variant="success" onClick={navigateToVoleeLogin}>Volee</Button>{' '}
        </Col>
        <Col  lg="6">
        <Button style={{ width: "25rem", height: "35rem" }}  variant="warning" onClick={navigateToNonproLogin}>NonPro</Button>{' '}
        </Col>
      </Row>
      
      
    </Container>
  );
}

export default TypesExample;