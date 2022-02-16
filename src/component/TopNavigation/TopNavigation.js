import React, { Fragment, useLayoutEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../asset/css/bootstrap.min.css";
import "../../asset/css/custom.css";

export default function TopNavigation() {
  const [navTitle, setnavTitle] = useState("navTitle");
  const [navBack, setnavBack] = useState("navBackground");
  const [navItem, setnavItem] = useState("navItem");
  const onScroll = () => {
    if (window.scrollY > 100) {
      setnavTitle("navScroleTitle");
      setnavBack("navBackgroundScroll");
      setnavItem("navItemScroll");
    } else if (window.scrollY < 100) {
      setnavTitle("navTitle");
      setnavBack("navBackground");
      setnavItem("navItem");
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <Navbar
        fixed="top"
        className={navBack}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className={navTitle}>
            RIS System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className={navItem} href="#deets">
                Home
              </Nav.Link>
              <Nav.Link className={navItem} href="#deets">
                Services
              </Nav.Link>
              <Nav.Link className={navItem} href="#deets">
                Courses
              </Nav.Link>
              <Nav.Link className={navItem} href="#deets">
                Portfolio
              </Nav.Link>
              <Nav.Link className={navItem} href="#deets">
                Contact
              </Nav.Link>
              <Nav.Link className={navItem} href="#deets">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
