import React, { MutableRefObject, Ref, useState } from "react";
import logo from "../logo-white.png";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <Navbar dark sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={logo} alt="my logo" className="float-start" />
          <h1 className="pt-2 Page-header">Steve Moritani</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <ScrollLink to="about" spy={true} className="about" offset={-100}>
                About
              </ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink
                to="projects"
                spy={true}
                activeClass="scroll-active"
                className="projects"
                offset={-90}
              >
                Projects
              </ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink
                to="skills"
                spy={true}
                activeClass="active"
                className="skills"
                offset={-90}
              >
                Skills
              </ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink
                to="contact"
                spy={true}
                activeClass="active"
                className="contact"
                offset={-90}
              >
                Contact
              </ScrollLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
