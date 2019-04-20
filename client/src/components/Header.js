import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link } from "react-router-dom";


const Header = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">MERN Starter</NavbarBrand>

    <Nav>
      <NavItem>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </NavItem>

      <NavItem>
        <Link className="nav-link" to="/page">
          Page
        </Link>
      </NavItem>
    </Nav>



  </Navbar>
);

export default Header;
