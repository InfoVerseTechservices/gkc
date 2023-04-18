import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import ab1 from "../../assets/images/about-one.png";
import ab2 from "../../assets/images/about-two.png";
import ab3 from "../../assets/images/about-three.png";
import ab4 from "../../assets/images/about-four.png";
import ab5 from "../../assets/images/about-five.png";
import ab6 from "../../assets/images/about-six.png";
const AboutCard = () => {
  const Services = [
    {
      title: "Leverage up to 30x",
      Img: ab1,
    },
    {
      title: "Leverage up to 30x",
      Img: ab2,
    },
    {
      title: "Super cheap transactions",
      Img: ab3,
    },
    {
      title: "Utilizes the most liquid AMMs",
      Img: ab4,
    },
    {
      title: "Permissionless trading",
      Img: ab5,
    },
    {
      title: "Fully composable",
      Img: ab6,
    },
  ];
  return (
    <>
      {Services.map((item) => (
        <Col xs={12} md={4} key={item.index} className="">
          <Card className="bg-transparent text-center">
            <Card.Body>
              <Image src={item.Img} className="img-fluid" />
              <Card.Title className="text-capitalize">{item.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default AboutCard;
