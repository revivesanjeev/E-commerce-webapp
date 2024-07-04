import { useContext } from "react";
import ProductContext from "./ProductContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./UpperHeader.css";
import { useLocation, NavLink } from "react-router-dom";
import AuthContext from "./AuthContext";

function UpperHeader({ onCartButtonClick }) {
  const { cartProducts } = useContext(ProductContext);
  const cartItemCount = cartProducts.length;
  const location = useLocation();
   const authCtx=useContext(AuthContext);



  const handleAuthButtonClick = () => {
    if (authCtx.isLoggedIn) {
      authCtx.logout();
    } else {
      authCtx.login();
    }
  };




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
          to="/auth"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleAuthButtonClick}
        >
          {authCtx.isLoggedIn ? "Logout" : "Login"}
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
