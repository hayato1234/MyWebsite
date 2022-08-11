import React, { useState } from "react";
import logo from "../logo.svg";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar dark sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={logo} alt="my logo" className="float-start" />
          <h1 className="mt-1 Page-header">Steve Moritani</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link">
                <a href="#about">About</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link">
                <a href="#projects">Projects</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link">
                <a href="#skills">Skills</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link">
                <a href="#contact">Contact</a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
