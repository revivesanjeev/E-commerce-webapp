import { useContext } from "react";
import ProductContext from "./ProductContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./UpperHeader.css";
import {useLocation, NavLink } from "react-router-dom";

function UpperHeader({ onCartButtonClick }) {

   const { cartProducts } = useContext(ProductContext);

     const cartItemCount = cartProducts.length;
      const location= useLocation();

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="customnav">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HOME
        </Navbar.Brand>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          STORE
        </Navbar.Brand>

        <Navbar.Brand
          as={NavLink}
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          ABOUT
        </Navbar.Brand>

        <Navbar.Brand
          as={NavLink}
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact US
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
