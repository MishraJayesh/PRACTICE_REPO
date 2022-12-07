import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../Cards/images/logo.jpg';

function Header() {
    return (
        <>
            <Navbar className='navbar' variant="dark">
                <Container>
                    <img src={logo} alt="logo" className="logo-img"/>
                    <Navbar.Brand href="#home">Atlas_Diary</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Packages</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;