import React from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import Servi1 from "../../assets/images/helthcare.png";
import Service2 from "../../assets/images/education.png";
import ServThree from "../../assets/images/finance.png";
const ServiceCard = () => {
  const Services = [
    {
      title: "Healthcare",
      Img: Servi1,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua. Ut enim ad minim veniam.",
    },
    {
      title: "education",
      Img: Service2,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua. Ut enim ad minim veniam.",
    },
    {
      title: "finance",
      Img: ServThree,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua. Ut enim ad minim veniam.",
    },
  ];
  return (
    <>
      {Services.map((item) => (
        <Col
          xs={12}
          md={4}
          key={item.index}
          className="d-flex align-items-stretch"
        >
          <Card className="bg-transparent border">
            <Card.Body>
              <Image
                src={item.Img}
                className="img-fluid cardimg d-block mx-auto"
              />
              <Card.Title className="text-capitalize">{item.title}</Card.Title>
              <Card.Text>{item.subtitle}</Card.Text>
              <Button variant="secondary">Know More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ServiceCard;
