import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import AboutCard from "../components/about/AboutCard";
import Header from "../layout/Header.";
import AboutImage from "../assets/images/aboutimage.png";
import aboufooter from "../assets/images/aboufooter.png";
import Footer from "../layout/Footer";
import RoadmapVertical from "../components/about/RoadmapVertical";

const About = () => {
  return (
    <>
      <Header />
      <section className="text-center py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={10}>
              <h3>
                Using blockchain technology, Smart Contracts, and our
                cryptocurrency, GKC Provides
              </h3>
              <p>
                the infrastructure for digital health applications and services
                to be built. These applications and services will be seamlessly
                powered by the user’s health data. Anyone will be able to
                develop on GKC ’s platform and we hope to foster a thriving
                ecosystem to provide value, reduce costs, and ultimately improve
                people’s lives.Many have tried to overcome this issue, and it is
                high on the agenda of governments and a source of frustration
                for doctors and patients. A significant component of the
                challenge focuses on data security.
              </p>

              <p>
                {" "}
                The cryptocurrency revolution is taking over the world, with
                many sectors adapting to the new currency method. From real
                estate to business, medical, education, and financial sector,
                you can use cryptocurrencies to pay for services from some
                companies. It will be interesting to see how soon this trend
                catches up with other sectors of the economy and it will live up
                to its potential to transform the financial world?
              </p>
              <p>
                Though there is hope for a worldwide acceptance of the currency
                as UAE, UE, USA, Australia, and other developed nations are
                taking a keen interest in regulating the blockchain and building
                a safe environment for their citizen’s virtual trading, that
                hope is covered with fog at the moment.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <Image src={AboutImage} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <AboutCard />
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <Image src={AboutImage} className="img-fluid" alt="" />
            </Col>
            <Col md={6}>
              <h2>Fully decentralized. Completely secure.</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ex ratione pariatur nobis perferendis labore excepturi
                ea obcaecati vitae illum facere voluptas officia ducimus
                eligendi quia dolore, sequi harum! Blanditiis.
              </p>
              <Row>
                <Col xs={12} md={6}>
                  <h5>Constant reviews and testing of our platform</h5>
                </Col>
                <Col xs={12} md={6}>
                  <h5>Your funds are as secure as possible</h5>
                </Col>
                <Col xs={12} md={6}>
                  <h5>Fully decentralized and non-custodial</h5>
                </Col>
                <Col xs={12} md={6}>
                  <h5>Built by seasoned crypto veterans </h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="verticalroadmap-sec">
        <Container>
          <Row>
            <Col>
              <RoadmapVertical />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="">
        <Container>
          <Row>
            <Col>
              <Image src={aboufooter} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
