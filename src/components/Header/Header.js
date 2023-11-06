import React, { useRef, useState } from 'react';
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
    CardBody,
    Card,
    Button,
} from 'reactstrap';
import img1 from "../../img/logoheadphone.png"
export default function Header() {
    const [on, setOn] = useState(false);
    const [on1, setOn1] = useState(false);
    const [on2, setOn2] = useState(false);
    const [on3, setOn3] = useState(false);
    const sidebarRef = useRef();
    const rightref = useRef();
    const handle_toggle = () => {
        sidebarRef.current.classList.toggle("active")
        rightref.current.classList.toggle("active")

    }
    const toggle = () => setOn(!on);
    const toggle1 = () => setOn1(!on1);
    const toggle2 = () => setOn2(!on2);
    const toggle3 = () => setOn3(!on3);
    return (
        <div className='header' >
            <a href='#' className='logo'>  <img src={img1}></img><h1 > SoundG</h1></a>
            <button className='toggle' onClick={handle_toggle}>
                <i class="fa-solid fa-bars"></i>
            </button>
            <div className='nav-side' ref={sidebarRef}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Audio</a></li>
                    <li><a href='#' onClick={toggle1} >
                        Headphones
                    </a></li>
                    <Collapse isOpen={on1}>
                                    home
                                    gdfgsdaer
                    </Collapse>
                    <li><a href='#' onClick={toggle2} >
                        Accessories
                    </a></li>
                    <Collapse isOpen={on2}>
                                    home
                    </Collapse>
                    <li><a href='#' onClick={toggle3} >
                        Shop
                    </a></li>
                    <Collapse isOpen={on3}>
                                    home
                    </Collapse>
                     <li><a href='#'>Pages</a></li>
                </ul>
                <button className='close' onClick={handle_toggle}>X</button>
            </div>
            <div className='right' onClick={handle_toggle} ref={rightref}></div>
            <Navbar expand="md" className="menu" color="faded" light  >
                <Collapse className='justify-content-end text' isOpen={on} navbar>
                    <Nav navbar >
                        <NavLink href='#'>Home</NavLink>
                        <NavLink href="/components/">Audio</NavLink>
                        <NavLink href="#">Headphones</NavLink>
                        <NavLink href='#'>Accessories</NavLink>
                        <NavLink href='#'>Shop</NavLink>
                        <NavLink href='#'>Pages</NavLink>
                        <input type='type' placeholder="Search"className='search'></input><a href='#' className='icon'><i class="fa-solid fa-magnifying-glass"></i><i class="fa-solid fa-cart-shopping"></i></a>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}