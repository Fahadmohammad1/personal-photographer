import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
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
              <NavLink to="/" className="text-dark">
                Home
              </NavLink>
              <Nav.Link href="#services">Services</Nav.Link>
            </Nav>
            <Nav>
              <NavLink to="/signIn" className="text-dark">
                SIGN IN
              </NavLink>
              <NavLink to="/signUp" className="text-dark">
                SIGN UP
              </NavLink>
              <button
                onClick={() => {
                  signOut(auth);
                }}
              >
                SIGN OUT
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
