import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header.";
import { Row, Container, Col, Card } from "react-bootstrap";
import Exchange from "../components/gkctolen/Exchange";
const GkcToken = () => {
  return (
    <>
      <Header />
      <section className="text-center py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={10}>
              <h6>Services</h6>
              <h3>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                fugiat voluptatem vel. Libero labore voluptas, voluptatem
                suscipit ratione quos architecto reiciendis debitis, tenetur
                ullam porro ipsum minima quae ad placeat.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <Row className="bg-ButterflyBush p-3 m-0 border rounded d-flex justify-content-between align-items-center">
            <Col>
              <h2 className="m-0 fs-6">Token Contract Address</h2>
            </Col>
            <Col className="text-end">
              <p className="m-0">asklbca23cv51saevsv2s1a5w6g6ws</p>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Card className="bg-dark border">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between bg-oranges-grs p-3">
                    <p className="m-0">Token Name:</p>
                    <p className="m-0">GKC</p>
                  </div>
                  <div className="p-3 d-flex justify-content-between">
                    <p className="m-0">Initial Circulating supply:</p>
                    <p className="m-0">37.5M</p>
                  </div>
                  <div className="p-3 d-flex justify-content-between">
                    <p className="m-0">Initial Market Cap:</p>
                    <p className="m-0">1.5M</p>
                  </div>
                  <div className="p-3 d-flex justify-content-between">
                    <p className="m-0">Estimated Listing</p>
                    <p className="m-0">Q1 2022</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark border">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between bg-oranges-grs p-3">
                    <p className="m-0">Token Type:</p>
                    <p className="m-0">ERC20 (Polygon)</p>
                  </div>

                  <div className="p-3 d-flex justify-content-between">
                    <p className="m-0">GKC TOKEN PRICE:</p>
                    <p className="m-0">0.040M</p>
                  </div>
                  <div className="p-3 d-flex justify-content-between">
                    <p className="m-0">Initial Market Cap:</p>
                    <p className="m-0">6.5M</p>
                  </div>
                  <div className="p-3 d-flex justify-content-between">
                    <p className="m-0">Estimated Listing</p>
                    <p className="m-0">1.5 Billion</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-5">
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Row>
                <Col md={6} className="">
                  <Card className="bg-dark border text-center p-5">
                    <Card.Body className="py-5">
                      <Card.Title className="mb-4">Price</Card.Title>
                      <Card.Text>$11,242,080,091</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mt-5 mb-4">
                  <Card className="bg-dark border text-center p-5">
                    <Card.Body className="py-5">
                      <Card.Title className="mb-4">Price</Card.Title>
                      <Card.Text>$11,242,080,091</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="">
                  <Card className="bg-dark border text-center p-5">
                    <Card.Body className="py-5">
                      <Card.Title className="mb-4">Price</Card.Title>
                      <Card.Text>$11,242,080,091</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mt-5 mb-4">
                  <Card className="bg-dark border text-center p-5">
                    <Card.Body className="py-5">
                      <Card.Title className="mb-4">Price</Card.Title>
                      <Card.Text>$11,242,080,091</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="text-center py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={11}>
              <Exchange />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default GkcToken;
