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
                    <Navbar.Brand href="/">
                        <img src={logo2} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <div className='col-auto'>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                
                               <Link to="/shipment" className="nav-link">
                                    <button  className="nav-item"><FontAwesomeIcon icon={faCartArrowDown} />
                                        <span>{props.cart.length}</span>
                                    </button>
                                </Link>    
                                
                              
                                {
                                    auth.user? 
                                    <Nav.Link href="#" style={{color:"blue"}}>{auth.user.name}</Nav.Link>:
                                    <Nav.Link href="/login" className='loginBtn'>Login</Nav.Link>
                                }
                                {
                                    auth.user ?
                                    <Nav.Link href="/" onClick={()=>auth.signOut()} className="btn btn-danger text-white" >Sign Out</Nav.Link>:
                                    <Nav.Link href="/login" className="btn btn-danger text-white">Sign Up</Nav.Link>
                                }                               
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;