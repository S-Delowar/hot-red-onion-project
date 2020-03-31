import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo2 from '../../Image/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div>
            <Navbar fixed="top" className="bg-light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo2} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <div className='col-auto'>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartArrowDown} /></Nav.Link>
                                <Nav.Link href="/login" className='loginBtn'>Login</Nav.Link>
                                <Button className="btn btn-danger">Sign Up</Button>                               
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;