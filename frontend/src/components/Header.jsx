import React from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import applogo from '../assets/applogo.jpg';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container >
          <LinkContainer to="/">
            <Navbar.Brand ><img src={applogo} alt="reload" style={{ width: 100, height: 40 }}/></Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/cart">
            <Nav.Link><i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
            <Nav.Link><i class="fa-solid fa-right-to-bracket"></i>&nbsp;Signin</Nav.Link>
            </LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header