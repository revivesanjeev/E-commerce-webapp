import { useContext } from "react";
import ProductContext from "./ProductContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./UpperHeader.css";

function UpperHeader({ onCartButtonClick }) {

   const { cartProducts } = useContext(ProductContext);

     const cartItemCount = cartProducts.length;


  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#store">STORE</Navbar.Brand>
        <Navbar.Brand href="#about">ABOUT</Navbar.Brand>
        <Button variant="outline-info" onClick={onCartButtonClick}>
          Cart
          <Badge pill bg="danger" className="cart-badge">
            {cartItemCount}
          </Badge>
        </Button>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
      </Container>
    </Navbar>
  );
}

export default UpperHeader;
