import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Footer from "../layout/Footer";
import Header from "../layout/Header.";
import Hero1 from "../assets/images/hero1.png";
import Nft from "../assets/images/NFT_1.png";
import ServiceCard from "../components/home/ServiceCard";
import Airdrop from "../assets/images/airdrop.png";
import Roadmap from "../components/home/Roadmap";
import RoadmapTwo from "../components/home/RoadmapTwo";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        <section className="py-5">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <h1 className="display-1 fw-700">
                  Endless Possibilities with{" "}
                  <span className="d-block  gradient-color-one">GKC Token</span>
                </h1>
              </Col>
              <Col>
                <Image src={Hero1} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <Row className="d-flex justify-content-center align-items-center border">
              <Col>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col>
                    <Image src={Nft} alt="" className="img-fluid" />
                  </Col>
                  <Col>
                    <h3>About</h3>
                    <h2>
                      Using blockchain technology, Smart Contracts, and our
                      cryptocurrency, GKC Provides
                    </h2>
                    <p>
                      the infrastructure for digital health applications and
                      services to be built. These applications and services will
                      be seamlessly powered by the user’s health data. Anyone
                      will be able to develop on GKC ’s platform and we hope to
                      foster a thriving ecosystem to provide value, reduce
                      costs, and ultimately improve people’s lives.
                    </p>
                    <Button variant="outline-secondary">Know More</Button>{" "}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <ServiceCard />
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <h5>airdrop</h5>
                <h2>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  odit? Aperiam consequuntur temporibus accusantium minima
                  necessitatibus, fugit maxime, odio cumque iste, at doloribus
                  ab earum ut. Eligendi accusamus iure voluptatum.
                </p>
                <Button variant="outline-secondary">Know More</Button>{" "}
              </Col>
              <Col>
                <Image src={Airdrop} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 mb-5">
          <Container>
            <Row>
              <Col xx={12} md={12}>
                <Roadmap />
              </Col>
              {/* <Col xx={12} md={12}>
                <RoadmapTwo />
              </Col> */}
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
