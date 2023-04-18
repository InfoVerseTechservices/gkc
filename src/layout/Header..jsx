import React from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import Logo from "../assets/images/GKC_Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        {" "}
        <Navbar expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <Image src={Logo} className="img-fluid" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/about" className="nav-link">
                  about
                </Link>
                <Link to="/service" className="nav-link">
                  Services
                </Link>
                <Link to="/gkc-token" className="nav-link">
                  GKC Token
                </Link>
                <Nav.Link href="#">Dapp</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-success">Claim Token</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
