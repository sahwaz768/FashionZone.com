
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Loginpage from './Loginpage';
import { Link } from 'react-router-dom';


Modal.setAppElement('#root');

const MasterHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {

    
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    closeModal();
  };
  return (
    <>
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
          <Button variant="success" onClick={openModal}> Login</Button>
           <Link to="/signup"><Button variant="danger mx-2" >SignUp</Button></Link> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sign In Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2 className='text-center'>Sign In</h2>
        <form onSubmit={handleSubmit}>
        <Loginpage/>
          
          <div>
          <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button className='mx-2' variant="primary" onClick={closeModal}>
        cancel
      </Button>
            
          </div>
        </form>
      </Modal>
    </div>
    <div>
   
    </div>
    </>
   
  )
}


export default MasterHeader
