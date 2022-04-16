import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fw-bold navbar"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-dark">
            Sindid's Photgraphy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-dark">
                Features
              </Nav.Link>
              <NavLink to="/pricing">Services</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/signIn" className="text-dark">
                SIGN IN
              </NavLink>
              <NavLink to="/signUp" className="text-dark">
                SIGN UP
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
