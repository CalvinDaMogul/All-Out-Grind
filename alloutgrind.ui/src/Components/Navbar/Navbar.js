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
    <div>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">All Out Grind</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/Quotes/">Quotes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/User/">User</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/LogIn">Log In</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
};
export default MyNavbar;