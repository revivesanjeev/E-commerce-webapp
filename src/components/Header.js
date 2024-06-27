import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "./Header.css";

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#store">STORE</Navbar.Brand>
        <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
        <Button variant="outline-info"> Cart</Button>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;
