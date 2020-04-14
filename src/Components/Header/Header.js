import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo2 from '../../Image/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';


const Header = (props) => {

    const auth = useAuth();
    console.log(auth.user);

    return (
        <div>
            <Navbar fixed="top" className="bg-light" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="" type="button">
                            <img src={logo2} alt="" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <div className='col-auto'>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <Link to="/shipment" className="nav-link">
                                    <button className="nav-item btn btn-success"><FontAwesomeIcon icon={faCartArrowDown} />
                                        <span>{props.cart.length}</span>
                                    </button>
                                </Link>


                                {
                                    auth.user ?
                                        <Link to="#" className="nav-link">
                                            <button className="btn btn-warning" style={{ color: "blue" }}>{auth.user.name}</button>
                                        </Link>
                                        :
                                        <Link to="/login" className="nav-link" >
                                            <button className='loginBtn btn btn-primary'>Login</button>
                                        </Link>
                                }
                                {
                                    auth.user ?
                                        <Link to="/" className="nav-link">
                                            <button onClick={() => auth.signOut()} className="btn btn-danger" >Sign Out</button>
                                        </Link>
                                        :
                                        <Link to="/login" className="nav-link">
                                            <button className="btn btn-danger">Sign Up</button>
                                        </Link>
                                }
                                {/* <Link to="/inventory" className="nav-link">
                                            <button className="btn btn-secondary">Inventory</button>
                                </Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;