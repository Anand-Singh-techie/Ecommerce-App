import React from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import applogo from '../assets/applogo.jpg';

const Header = () => {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container fluid>
        <Navbar.Brand href="#"><img src={applogo} alt="reload" style={{ width: 100, height: 40 }}/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home"><i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart</Nav.Link>
            <Nav.Link href="#features"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;Signin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header