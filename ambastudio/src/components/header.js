import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import React from 'react'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><h4 className='font-serif'>AMBA STUDIO</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Get Photo</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Passport Size Photo</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Collage
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Wedding Photography
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success" href="/page">Signup</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
