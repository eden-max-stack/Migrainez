import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are loaded
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/home">MIGRAINEZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} smooth to="/home#one-on-one">1-ON-1</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/home#migraine-checker">MIGRAINE CHECKER</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/home#education-content">EDUCATION CONTENT</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/home#articles">ARTICLES</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/home#community-support">COMMUNITY SUPPORT</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/home#treatment">TREATMENT</Nav.Link>
              <Nav.Link as={HashLink} smooth to="/home#contact-us">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
