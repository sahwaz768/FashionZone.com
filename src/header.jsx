import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import "./App.css";

const Header =() => {
  return (
    <div className="header">
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#" className='ms-5 Fzone'>FashionZone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-auto my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link href="#action1" className='menu ml-4'>Home</Nav.Link>
            <Nav.Link href="#action2" className='menu mx-3'>Product</Nav.Link>
            <Nav.Link href="#action2" className='menu mx-1'>Category</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="midpara">
    <div className="fade-in-text"> <h1>GREATE STYLE YOU<br />CAN TRUST</h1><br />
    <a href="">Mens</a> <a href="">Womens</a>
    </div>
    </div>
   
    </div>
  );
}

export default Header;