import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
return (
    <Navbar color="dark" dark expand="md">
    <NavbarBrand tag={Link} to="/">Movie Night</NavbarBrand>
    <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
        <NavLink tag={Link} to="/about">About</NavLink>
        </NavItem>
    </Nav>
    </Navbar>
);
};

export default NavigationBar;