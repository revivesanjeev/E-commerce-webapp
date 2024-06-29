import { useContext } from "react";
import ProductContext from "./ProductContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./UpperHeader.css";
import {useLocation, Link } from "react-router-dom";

function UpperHeader({ onCartButtonClick }) {

   const { cartProducts } = useContext(ProductContext);

     const cartItemCount = cartProducts.length;
      const location= useLocation();

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          HOME
        </Navbar.Brand>
        <Navbar.Brand href="#store">STORE</Navbar.Brand>
        <Navbar.Brand as={Link} to="/about">
          ABOUT
        </Navbar.Brand>
        {location.pathname === "/" && (
          <Button variant="outline-info" onClick={onCartButtonClick}>
            Cart
            <Badge pill bg="danger" className="cart-badge">
              {cartItemCount}
            </Badge>
          </Button>
        )}
        <Navbar.Toggle aria-controls="navbar-dark-example" />
      </Container>
    </Navbar>
  );
}

export default UpperHeader;
