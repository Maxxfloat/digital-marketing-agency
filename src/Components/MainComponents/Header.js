import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import myStyle from '../Style/Header.module.css';

const Header = () => {
  return (
    <Navbar className={`${myStyle.myHeader}`} sticky="top" expand="lg">
      <Navbar.Toggle aria-controls="myNav" />
      <Navbar.Collapse id="myNav">
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
          <Nav.Link
            as={NavLink}
            to="/services"
            className={`${myStyle.myHeaderBtn}`}
          >
            خدمات
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
    </Navbar>
  );
};

export default Header;
