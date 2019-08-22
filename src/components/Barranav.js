import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Barranav(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">React</Nav.Link>
                <Nav.Link href="#pricing">Bootstrap</Nav.Link>
                <NavDropdown title="Ejercicios" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Ejercicios elementales</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Ejercicios intermedios</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Ejercicios avanzados</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Juegos</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Mas items!</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Memes de Internet
                </Nav.Link>
            </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default Barranav;