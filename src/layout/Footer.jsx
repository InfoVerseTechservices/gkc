import React from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import Logo from "../assets/images/GKC_Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <section className="footer-top py-5">
          <Container>
            <Row>
              <Col xs={12}>
                <Image src={Logo} alt="Logo" className="img-fluid" />
                <p className="mt-4">
                  Join our community <a href="#">info@gkccrypto.com</a>
                </p>
              </Col>
              <Col xs={12}>
                <Nav className="justify-content-center">
                  <Nav.Link href="/home">
                    <FaFacebookF />
                  </Nav.Link>
                  <Nav.Link eventKey="link-1">
                    <BsInstagram />
                  </Nav.Link>
                  <Nav.Link eventKey="link-2">
                    <BsTwitter />
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="footer-bottom py-5">
          <Container>
            <Row>
              <Col>
                <p className="m-0">
                  Global Knowledge Center | All rights reserved 2023
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default Footer;
