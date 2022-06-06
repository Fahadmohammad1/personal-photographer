import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";

import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="fw-bold navbar"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home" id="site-name" className="fs-4">
            Sindid's Photgraphy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className="text-dark my-auto text-decoration-none"
              >
                Home
              </NavLink>
              <Nav.Link href="#services">Services</Nav.Link>
              <NavLink
                to="/blogs"
                className="text-dark my-auto text-decoration-none"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/about"
                className="ms-2 text-dark my-auto text-decoration-none"
              >
                About
              </NavLink>
            </Nav>
            <Nav>
              {user ? (
                <button
                  className="primary-btn "
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  SIGN OUT
                </button>
              ) : (
                <div>
                  <NavLink
                    to="/signIn"
                    className="text-dark my-auto text-decoration-none mx-2 "
                  >
                    <button className="primary-btn">SIGN IN</button>
                  </NavLink>
                  <NavLink
                    to="/signUp"
                    className="text-dark my-auto text-decoration-none"
                  >
                    <button className=" primary-btn">SIGN UP</button>
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
