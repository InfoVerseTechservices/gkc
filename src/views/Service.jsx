import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../layout/Footer";
import S1 from "../assets/images/helthcare.png";
import S2 from "../assets/images/education.png";
import S3 from "../assets/images/finance.png";
import Header from "../layout/Header.";
const Service = () => {
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
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <Image src={S2} className="img-fluid cardimg d-block mx-auto" />
            </Col>
            <Col>
              <h6>Education</h6>
              <h2>GKC Blockchain’s for Education sector</h2>
              <p>
                GKC Blockchain will be extremely beneficial in the education
                sector. It allows educational institutions to secure the data of
                their students. They are able to take ownership of their
                credentials, awards, certificates, and academic identity. GKC
                Blockchain technology can offer universal access to open
                educational resources like books, podcasts, and movies in the
                public domain, and are free to use and redistribute, in addition
                to supporting lifelong learning and enables the affordable and
                secure sharing of these resources in a public network. Educators
                have also found the technology helpful for creating smart
                contracts, distributing student loan payments and sharing crypto
                incentives.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h6>Education</h6>
              <h2>GKC Blockchain’s for Education sector</h2>
              <p>
                GKC Blockchain will be extremely beneficial in the education
                sector. It allows educational institutions to secure the data of
                their students. They are able to take ownership of their
                credentials, awards, certificates, and academic identity. GKC
                Blockchain technology can offer universal access to open
                educational resources like books, podcasts, and movies in the
                public domain, and are free to use and redistribute, in addition
                to supporting lifelong learning and enables the affordable and
                secure sharing of these resources in a public network. Educators
                have also found the technology helpful for creating smart
                contracts, distributing student loan payments and sharing crypto
                incentives.
              </p>
            </Col>
            <Col>
              <Image src={S1} className="img-fluid cardimg d-block mx-auto" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <Image src={S3} className="img-fluid cardimg d-block mx-auto" />
            </Col>
            <Col>
              <h6>Education</h6>
              <h2>GKC Blockchain’s for Education sector</h2>
              <p>
                GKC Blockchain will be extremely beneficial in the education
                sector. It allows educational institutions to secure the data of
                their students. They are able to take ownership of their
                credentials, awards, certificates, and academic identity. GKC
                Blockchain technology can offer universal access to open
                educational resources like books, podcasts, and movies in the
                public domain, and are free to use and redistribute, in addition
                to supporting lifelong learning and enables the affordable and
                secure sharing of these resources in a public network. Educators
                have also found the technology helpful for creating smart
                contracts, distributing student loan payments and sharing crypto
                incentives.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Service;
