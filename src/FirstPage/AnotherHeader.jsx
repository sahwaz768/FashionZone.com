import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const AnotherHeader = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="#" className='ms-5 Fzone'>FashionZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-auto my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            
            
          </Nav>
          <Form className="d-flex">
            <div className=''>
          <Link to="/cartpage"><CiShoppingCart  size={40}/></Link>
         <Link to="/profilepage"> <CgProfile  size={30} className='mx-4'/></Link>
          </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AnotherHeader
