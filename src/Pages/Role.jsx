import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./Role.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function TypesExample() {
  const navigate = useNavigate();

  const navigateToNonproLogin = () => navigate("/nonpro-login");
  const navigateToVoleeLogin = () => navigate("/volee-login");

  return (
    <Container
      fluid
      className="flex-column d-flex align-items-center justify-content-center role-container"
      style={{ backgroundImage: "linear-gradient(to right, #ccd3db, #fce7e8)", height:"100vh" }}
    >
      <Row className="justify-content-center">
        <Col lg="8">
          <img
            alt=""
            src="/assets/logo.png"
            width="300"
            height="200"
            className="align-top"
          />
        </Col>
      </Row>
      <Row className="mb-5 justify-content-md-center">
        <Col
          lg="6"
          style={{ width: "20rem", height: "30rem" }}
          onClick={navigateToVoleeLogin}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/assets/volee.png" />
            <Card.Body>
              <Card.Title>Volee</Card.Title>
              <Card.Text>
                “Volunteers do not necessarily have the time; they have the
                heart.” – <i>Elizabeth Andrew</i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg="6"
          style={{ width: "20rem", height: "30rem" }}
          onClick={navigateToNonproLogin}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/assets/npo.png" />
            <Card.Body>
              <Card.Title>Non-Profit Organization</Card.Title>
              <Card.Text>
                “The best way to find yourself is to lose yourself in the
                service of others.” – <i>Gandhi</i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TypesExample;
