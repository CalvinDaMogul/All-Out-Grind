import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './Navbar.scss';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-wrapper">
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">All Out Grind</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/All Quotes/">Quotes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Quote Page/">User</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/LogIn">Log In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Add Quote">Add Quote</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/App">Log Out</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
};
export default MyNavbar;