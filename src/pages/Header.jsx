import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import '../App.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
        <div id='nav-container'>
                <Navbar style={{ backgroundColor: "#d21484" }} className="navbar-dark" expand="lg" >
                    <Link to="/" className='ms-5 text-white d-flex justify-content-between'>
                       <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjviHAK0mmITcaNyx1DZzfbUjNGuGJg8-4A&usqp=CAU"} alt="Logo" width="30" height="30" className="ms-4 inline-block rounded  img-fluid" />
                        <div className='text-white ms-4 text center d-flex text-bold align-items-center' >Movie App</div>
                    </Link>

                    <Navbar.Collapse id="basic-navbar-nav" style={{ display: "flex " , justifyContent: 'right', paddingRight: "120px" }}>
                        <Nav className="ml-auto d-sm-none d-md-block">
                            <NavDropdown title={<FaUser className='text-white' />} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">watch list</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Header;