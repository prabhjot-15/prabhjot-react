import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = () => (
<Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Movie Night</NavbarBrand>
    <Nav>
    <NavItem>
        <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="/about">About</NavLink>
    </NavItem>
    </Nav>
</Navbar>
);

export default AppNavbar;
