import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';

export const Sidebar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">TFPlayground</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <NavDropdown title="Gradients" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/gradient/linear">Linear</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><Link to="/gradient/polynomial">Polynomial</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
