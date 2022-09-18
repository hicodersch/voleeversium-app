import React from "react";
import NavbarComponent from "../components/NavbarNpoComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectDetails() {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <div>
        <NavbarComponent></NavbarComponent>
        <Container fluid className="mt-5 flex-column d-flex ">
          <Row className="justify-content-center m-2">
            <Col lg="3">
              <Row>
                <img
                  style={{ borderRadius: "50%" }}
                  alt=""
                  src="https://teammeta.eu/wp-content/uploads/2020/07/developer.jpg"
                  width="300"
                  height="300"
                />
              </Row>
              <Row>
                <h3>Details</h3>
                <hr></hr>
              </Row>
              <Row>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                cupiditate veritatis magnam ad quidem, tempore tenetur maxime
                nihil accusantium maiores velit quos dolor eveniet commodi
                aliquid nesciunt, quo eum? Placeat?
              </Row>
              <Row>
                <h3>Requirements</h3>
                <hr></hr>
              </Row>
              <strong>Skills</strong>
              <Row>
                <Col lg="2">
                  <Badge bg="primary">JavaScript</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="secondary">HTML</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="danger">React</Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="warning" text="dark">
                    Node.js
                  </Badge>{" "}
                </Col>
                <Col lg="2">
                  <Badge bg="info">Java</Badge>{" "}
                </Col>
              </Row>
              <br />
              <strong>Schedule</strong>
              Lorem ipsum dolor sit amet consectetur.
            </Col>
            <Col className="lg=8 m-5">
              <Row>
                <h1>Onboarded</h1>
                <hr></hr>
                <Col>
                  <Card style={{ width: "15rem", height: "25rem" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Img
                        className="rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                        variant="top"
                        src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
                      />
                      <Card.Img
                        style={{ width: "4rem", height: "2rem" }}
                        variant="top"
                        src="/assets/star.png"
                      />
                      <Card.Title>User Name</Card.Title>
                      <Card.Text>Senior Developer</Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur.
                      </Card.Text>
                      <img
                        style={{ width: "3rem", height: "2rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/2048px-Green_check.svg.png"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "15rem", height: "25rem" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Img
                        className="rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                        variant="top"
                        src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
                      />
                      <Card.Img
                        style={{ width: "4rem", height: "2rem" }}
                        variant="top"
                        src="/assets/star.png"
                      />
                      <Card.Title>User Name</Card.Title>
                      <Card.Text>Senior Developer</Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur.
                      </Card.Text>
                      <img
                        style={{ width: "3rem", height: "2rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/2048px-Green_check.svg.png"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "15rem", height: "25rem" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Img
                        className="rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                        variant="top"
                        src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
                      />
                      <Card.Img
                        style={{ width: "4rem", height: "2rem" }}
                        variant="top"
                        src="/assets/star.png"
                      />
                      <Card.Title>User Name</Card.Title>
                      <Card.Text>Senior Developer</Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur.
                      </Card.Text>
                      <img
                        style={{ width: "3rem", height: "2rem" }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/2048px-Green_check.svg.png"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <h1>Pending</h1>
                <hr></hr>
                <Col>
                  <Card style={{ width: "15rem", height: "25rem" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Img
                        className="rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                        variant="top"
                        src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
                      />
                      <Card.Img
                        style={{ width: "4rem", height: "2rem" }}
                        variant="top"
                        src="/assets/star.png"
                      />
                      <Card.Title>User Name</Card.Title>
                      <Card.Text>Senior Developer</Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur.
                      </Card.Text>
                     
                    </Card.Body>
                    <Row className="justify-content-center">
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="success" size="md">
                            Accept
                          </Button>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="warning" size="md">
                            Decline
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "15rem", height: "25rem" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Img
                        className="rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                        variant="top"
                        src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
                      />
                      <Card.Img
                        style={{ width: "4rem", height: "2rem" }}
                        variant="top"
                        src="/assets/star.png"
                      />
                      <Card.Title>User Name</Card.Title>
                      <Card.Text>Senior Developer</Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur.
                      </Card.Text>
                    </Card.Body>
                    <Row className="justify-content-center">
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="success" size="md">
                            Accept
                          </Button>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="warning" size="md">
                            Decline
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "15rem", height: "25rem" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Img
                        className="rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                        variant="top"
                        src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
                      />
                      <Card.Img
                        style={{ width: "4rem", height: "2rem" }}
                        variant="top"
                        src="/assets/star.png"
                      />
                      <Card.Title>User Name</Card.Title>
                      <Card.Text>Senior Developer</Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur.
                      </Card.Text>
                
                    </Card.Body>
                    <Row className="justify-content-center">
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="success" size="md">
                            Accept
                          </Button>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="warning" size="md">
                            Decline
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-5" >
                <h1>Matching</h1>
                <hr></hr>
                <Col>
                  <Card style={{ width: "15rem", height: "25rem" }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Img
                        className="rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                        variant="top"
                        src="https://i.pinimg.com/originals/44/9e/5e/449e5e93c14f34fb7b90559e4f9908ab.jpg"
                      />
                      <Card.Img
                        style={{ width: "4rem", height: "2rem" }}
                        variant="top"
                        src="/assets/star.png"
                      />
                      <Card.Title>User Name</Card.Title>
                      <Card.Text>Senior Developer</Card.Text>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur.
                      </Card.Text>
                   
                    </Card.Body>
                    <Row className="justify-content-center">
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="success" size="md">
                            Accept
                          </Button>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="m-2 d-grid gap-2">
                          <Button variant="warning" size="md">
                            Decline
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProjectDetails;
