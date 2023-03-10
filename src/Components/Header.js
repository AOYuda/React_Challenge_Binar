import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./Header.css";
import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  const handleClick = () => {
    const element = document.getElementById("ourservice, why-us-id, testi, faq-id");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" background  fixed-top">
          <Container>
            <Navbar.Brand className="navbar-brand" onClick={handleScrollTop}></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="fw-bolder p-3">
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 mb-2 me-5 text-link-style fw-bold">
                  <NavLink onClick={handleClick} to="/#ourservice" className="nav-link active nav-item px-3">
                    Our Services
                  </NavLink>
                  <NavLink onClick={handleClick} to="/#why-us-id" className="nav-link active nav-item px-3">
                    Why Us
                  </NavLink>
                  <NavLink onClick={handleClick} to="/#testi" className="nav-link active nav-item px-3">
                    Testimonial
                  </NavLink>
                  <NavLink onClick={handleClick} to="/#faq-id" className="nav-link active nav-item px-3">
                    FAQ
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Fragment>
  );
};

export default Header;
