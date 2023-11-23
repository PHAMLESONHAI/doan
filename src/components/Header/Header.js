import React, { useRef, useState } from 'react';
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
    NavbarText,
    Container,
    Row,
    Col,
} from 'reactstrap';
import "./Header.css"
import img1 from "../../img/Marshall-Logo-1.png"
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
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
    const toggle1 = () => setOn1(!on1);
    const toggle2 = () => setOn2(!on2);
    const toggle3 = () => setOn3(!on3);
    return (
        
        <div>
       
            <div className='toggle-header'>
            <button className='toggle' onClick={handle_toggle}>
                <i class="fa-solid fa-bars"></i>
            </button>
            <div className='nav-side' ref={sidebarRef}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Accessories</a></li>
                    <li><a href='#' onClick={toggle1} >
                        Headphones<i class="fa-solid fa-chevron-down" ></i>
                    </a></li>
                    <Collapse className='dropdown' isOpen={on1}>
                        Home
                    </Collapse>
                    <li><a href='#' onClick={toggle2} >
                        Audio<i class="fa-solid fa-chevron-down" ></i>
                    </a></li>
                    <Collapse className='dropdown' isOpen={on2}>
                        home
                    </Collapse>
                    <li><a href='#' onClick={toggle3} >
                        Shop<i class="fa-solid fa-chevron-down" ></i>
                    </a></li>
                    <Collapse className='dropdown' isOpen={on3}>
                        home
                    </Collapse>

                </ul>
                <button className='close' onClick={handle_toggle}>X</button>
            </div>
            <div className='right' onClick={handle_toggle} ref={rightref}></div>
            </div>
            
            <Container>
                <Row>
                    <Col sm="12" md="6" lg="4">
                        <div className='info-header'>
                            <div className='address-header'>
                                <i class="fa-solid fa-location-dot"></i>
                                <ul className='gps-header'>
                                    <li><a href='#'>HN: 11 Đường Ven Sông Lừ, Kim Liên, Đống Đa, HN</a></li>
                                    <li><a href='#'>HCM: 62 Hoa Cau, Phường 7, Phú Nhuận, TP.HCM</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col  sm="12" md="6" lg="3">
                        <div className='logo'>
                            <a href='#' className='logo1'><img src={img1}></img></a>
                        </div>
                    </Col>
                    <Col  md="6" lg="2">
                        <div className='contact-header'>
                            <i class="fa-solid fa-phone"></i>                                <ul className='phone-header'>
                                <li><a href='#'>0928.759.555</a></li>
                                <li><a href='#'>0394.678.121</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Navbar c expand="md" color="faded" light>
                <Container>
                    <Row>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="" navbar>
                                <div className='home'>
                                    <a href='#'><i class="fa-solid fa-house"></i></a>
                                </div>
                                <NavItem>
                                    <NavLink href="#" className='menu'>LoaMarshall<i class="fa-solid fa-angle-down"></i>
                                        <ul className='sub-menu'>
                                            <a href='#'><li>dsadsas</li></a>
                                            <a href='#'><li>dsadsas</li></a>
                                            <a href='#'><li>dsadsas</li></a>
                                            <a href='#'><li>dsadsas</li></a>
                                        </ul>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className='device'>
                                        Phụ kiện Marshall
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className='menu1'>
                                        Tai nghe Marshall<i class="fa-solid fa-angle-down"></i>
                                        <ul className='sub-menu1'>
                                            <a href='#'><li>dsadsas</li></a>
                                            <a href='#'><li>dsadsas</li></a>
                                            <a href='#'><li>dsadsas</li></a>
                                            <a href='#'><li>dsadsas</li></a>
                                        </ul>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        Contact
                                    </NavLink>
                                </NavItem>

                            </Nav>
                            <div className='left-header'>
                                <Col sm="12" md="4" >
                                    <a href='#'><i class="fa-solid fa-magnifying-glass"></i></a>
                                    <a href='#'><i class="fa-regular fa-user"></i> </a>
                                    <a href='#'><i class="fa-regular fa-heart"></i></a>
                                    <a href='#'><i class="fa-solid fa-cart-shopping"></i></a>
                                </Col>
                            </div>
                        </Collapse>
                    </Row>
                </Container>
            </Navbar>

        </div>
    );
}