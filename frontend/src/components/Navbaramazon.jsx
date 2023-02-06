import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import applogo from '../assets/applogo.jpg';

const Navbaramazon = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={applogo} alt="reload" style={{ width: 100, height: 40 }}/></Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > */}
          {/* <NavDropdown title="Link">
            <NavDropdown.Item href='#'>Action</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='#'>Action</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown> */}
           <Nav className="ml-auto">
            <Nav.Link href="#features"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;Signin</Nav.Link>
            <Nav.Link href="#home"><i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart</Nav.Link>
          </Nav>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          {/* </Nav> */}
      </Container>
    </Navbar>
    </>
  )
}

export default Navbaramazon