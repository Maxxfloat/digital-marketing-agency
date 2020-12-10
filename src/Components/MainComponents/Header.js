import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import myStyle from "../Style/Header.module.css";

const logoHeader = (
  <p
    style={{
      fontSize: "30px",
      margin: "0px",
      padding: "0px",
      border: "solid black 2px",
      borderRadius: "10%",
    }}
  >
    Logo
  </p>
);
const Header = () => {
  return (
    <>
      <Navbar className={`${myStyle.myHeader}`} sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="myNav" />
        {window.innerWidth <= 991 ? logoHeader : null}
        <Navbar.Collapse id="myNav" className="text-center">
          <Nav>
            <Nav.Link as={NavLink} to="/" className={`${myStyle.myHeaderBtn}`}>
              خانه
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={`${myStyle.myHeaderBtn}`}
            >
              درباره ما
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={`${myStyle.myHeaderBtn}`}
            >
              ارتباط با ما
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link
              as={NavLink}
              to="/signup"
              className={`${myStyle.myHeaderBtn}`}
            >
              عضویت
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {window.innerWidth <= 991 ? null : logoHeader}
      </Navbar>
    </>
  );
};

export default Header;
