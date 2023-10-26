
import React, { useState } from 'react';
import "./Header.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
} from 'reactstrap';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar expand="md"  className="menu"color="faded" light    >
                <NavbarToggler onClick={toggle} />
                <Collapse  className=" justify-content-end"  isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavLink href='#'>Home</NavLink>
                        <NavLink href="/components/">About Us</NavLink>
                        <NavLink href="#">Services<i class="fa-solid fa-chevron-down"></i></NavLink>
                        <NavLink href='#'>Pages<i class="fa-solid fa-chevron-down"></i></NavLink>
                        <NavLink href='#'>Blog<i class="fa-solid fa-chevron-down"></i></NavLink>
                        <NavLink href='#'>Contact</NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}