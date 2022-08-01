import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={logo} alt="my logo" className="float-start" />
          <h1 className="mt-1">Steve Moritani</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/directory">
                Project
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Links
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
