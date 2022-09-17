import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import NavbarComponent from "../components/NavbarVoleeComponent";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function VoleeBazar() {
  const [coin, setCoin] = useState(2500);

  const handleClick=(pCoin)=>{
    setCoin(coin-pCoin)
  }

  const minCoin = () => {};

  const voleeGift = [
    {
      companyName: "Apple",
      voleeHero: "Apple Gift Card",
      image:
        "https://yt3.ggpht.com/ytc/AMLnZu-jHEMxJemdRdZyi3vgBPHSNrnTeG7WqbJxYzFhLw=s900-c-k-c0x00ffffff-no-rj",
      price: 55,
      schedule: "",
      coin: 50,
    },
    {
      companyName: "Zurich Ins.",
      voleeHero: "Zurich Ins. Gift Card",
      image:
        "https://img.nzz.ch/2022/03/27/369ecd79-3e47-47a6-929b-a855aca038d2.png?width=560&fit=crop&quality=75&auto=webp",
      price: 25,
      schedule: "",
      coin: 300,
    },
    {
      companyName: "SBB",
      voleeHero: "SBB Gift Card",
      image:
        "https://www.scholtysik.ch/dam/jcr:77e16047-f12d-468f-9253-1d11fde354ea/131125_scholtysik_news_sbb_new.png",
      price: 15,
      schedule: "",
      coin: 400,
    },
    {
      companyName: "Migros",
      voleeHero: "Migros Gift Card",
      image:
        "https://yt3.ggpht.com/ytc/AAUvwnhAo_SQh0wmK1uX4zatcRgCdnRE6Spf_as9ZELV=s900-c-k-c0x00ffffff-no-rj",
      price: 75,
      schedule: "",
      coin: 600,
    },
    {
      companyName: "Coop",
      voleeHero: "Coop Gift Card",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaeauhtg89E1GQvUGlbUt_-ebLb3voIpskQ&usqp=CAU",
      price: 45,
      schedule: "",
      coin: 900,
    },
  ];
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Container className="mt-5 flex-column d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <Card.Text
              className="d-flex justify-content-center align-items-center"
              style={{ fontSize: 32 }}
            >
              {coin}{" "}
              <img
                alt=""
                src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
                width="30em"
                height="30em"
              />
            </Card.Text>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {voleeGift.map((pro) => {
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
                    <hr></hr>
                    <Card.Title>{pro.companyName}</Card.Title>
                    <Card.Text>{pro.voleeHero}</Card.Text>
                    <Card.Text>
                      <strong>Skills</strong>
                    </Card.Text>

                    <Card.Text>
                      <strong>Schedule</strong>{" "}
                    </Card.Text>
                    <Card.Text>{pro.schedule}</Card.Text>
                    <Card.Text
                      className="d-flex justify-content-center align-items-center"
                      style={{ fontSize: 22 }}
                    >
                      {pro.coin}{" "}
                      <img
                        alt=""
                        src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
                        width="30em"
                        height="30em"
                      />
                    </Card.Text>
                  </Card.Body>

                  <Card className="d-flex flex-row justify-content-center align-items-center m-0">
                    <Button
                      style={{ width: "25rem", height: "2rem" }}
                      variant="success text-white"
                      type="submit"
                      onClick={event => handleClick(pro.coin)}
                        >
                      Get
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

export default VoleeBazar;
