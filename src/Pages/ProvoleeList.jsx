import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import NavbarComponent from "../components/NavbarNpoComponent";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";



function ProvoleeList() {

  const navigate = useNavigate();

    const navigateProjectDetails = ()=> navigate("/project-details");
  const provoleeList = [
    {
      projectName: "FullStack Web Development Course",
      image: "https://teammeta.eu/wp-content/uploads/2020/07/developer.jpg",
      skills: [
        { skill: "JS", color: "primary" },
        { skill: "HTML", color: "warning" },
        { skill: "NODE", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "4 hours every Saturday",
    },
    {
      projectName: "FullStack Web Development Course",
      image: "https://teammeta.eu/wp-content/uploads/2020/07/developer.jpg",
      skills: [
        { skill: "JS", color: "primary" },
        { skill: "HTML", color: "warning" },
        { skill: "NODE", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "4 hours every Saturday",
    },
    {
      projectName: "FullStack Web Development Course",
      image: "https://teammeta.eu/wp-content/uploads/2020/07/developer.jpg",
      skills: [
        { skill: "JS", color: "primary" },
        { skill: "HTML", color: "warning" },
        { skill: "NODE", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "4 hours every Saturday",
    },
    {
      projectName: "FullStack Web Development Course",
      image: "https://teammeta.eu/wp-content/uploads/2020/07/developer.jpg",
      skills: [
        { skill: "JS", color: "primary" },
        { skill: "HTML", color: "warning" },
        { skill: "NODE", color: "info" },
        { skill: "React", color: "success" },
      ],
      schedule: "4 hours every Saturday",
    },
  ];
  return (
    <>
      <NavbarComponent></NavbarComponent>

      <Container className="mt-5 flex-column d-flex align-items-center justify-content-center">
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
                      src="https://teammeta.eu/wp-content/uploads/2020/07/developer.jpg"
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
                  </Card.Body>
                  <div className="m-2 d-grid gap-2">
      <Button variant="warning" size="lg" onClick={navigateProjectDetails}>
        Details
      </Button>
      
    </div>
                </Card>
              </Col>
            );
          })}

        </Row>
      </Container>
    </>
  );
}

export default ProvoleeList;
