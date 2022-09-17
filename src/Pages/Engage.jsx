import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import NavbarComponent from "../components/NavbarVoleeComponent";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function Engage() {
  const provoleeList = [
    {
      projectName: "FullStack Web Development Course",
      image:
        "https://www.scholtysik.ch/dam/jcr:77e16047-f12d-468f-9253-1d11fde354ea/131125_scholtysik_news_sbb_new.png",
      skills: [
        { skill: "JS", color: "primary" },
        { skill: "HTML", color: "warning" },
        { skill: "NODE", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "1 hours every Saturday",
      coin:1,
    },
    {
      projectName: "Cooking classes for children",
      image:
        "https://www.tailorbrands.com/wp-content/uploads/2020/06/mcdonalds-logo-a-1.png",
      skills: [
        { skill: "Gourmet", color: "primary" },
        { skill: "Cook", color: "warning" },
        { skill: "NODE", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "2 hours every Saturday",
      coin:2,
    },
    {
      projectName: "English Course for the needy",
      image: "https://teammeta.eu/wp-content/uploads/2020/07/developer.jpg",
      skills: [
        { skill: "Gramatik", color: "primary" },
        { skill: "Speaking", color: "warning" },
        { skill: "Computer", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "3 hours every Saturday",
      coin:3,
    },
    {
      projectName: "FullStack Web Development Course",
      image:
        "https://cdn1-assets.talendo.ch/uploads/logo_image_item/file/7515989d1c2f94c0cf8c5e4aefd3d12b/1562159932/swisscom-directories-ag-localsearch-logo-talendo.png",
      skills: [
        { skill: "JS", color: "primary" },
        { skill: "HTML", color: "warning" },
        { skill: "NODE", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "5 hours every Saturday",
      coin:5,
    },
  ];
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Container className="mt-5 flex-column d-flex align-items-center justify-content-center">
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
          {provoleeList.map((pro) => {
            return (
              <Col className="mt-5" lg="4">
                <Card style={{ width: "25rem", height: "35rem" }}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Img
                      className="rounded-circle"
                      style={{ width: "10rem", height: "10rem" }}
                      variant="top"
                      src={pro.image}
                    />
                    <Card.Title>Project Name</Card.Title>
                    <Card.Text>{pro.projectName}</Card.Text>
                    <Card.Title>Requirements</Card.Title>
                    <Card.Text>
                      <strong>Skills</strong>
                    </Card.Text>

                    <Card.Text>
                      <Row className="bg-light m-3">
                        {pro.skills.map((skill) => {
                          return (
                            <Col lg="2">
                              <Badge bg={skill.color}>{skill.skill}</Badge>{" "}
                            </Col>
                          );
                        })}
                      </Row>
                    </Card.Text>
                    <Card.Text>
                      <strong>Schedule</strong>{" "}
                    </Card.Text>
                    <Card.Text>{pro.schedule}</Card.Text>
                    <Card.Text className="d-flex justify-content-center align-items-center" style={{ fontSize:22 }}>{pro.coin} <img 
                alt=""
                src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
                width="30em"
                height="30em"
              /></Card.Text>
                    
                  </Card.Body>
                  <Card className="d-flex flex-row justify-content-center align-items-center m-0">
                      <Button style={{ width: "12.5rem", height: "2rem" }}  variant="success text-white" type="submit">
                        Accept
                      </Button>
                      <Button style={{ width: "12rem", height: "2rem" }} variant="warning text-white" type="submit">
                        Decline
                      </Button>
                    </Card>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Engage;
