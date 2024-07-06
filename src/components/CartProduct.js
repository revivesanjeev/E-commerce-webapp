import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CartProduct.css";
import axios from "axios";
import AuthContext from "./AuthContext";
import ProductContext from "./ProductContext";

const CartProduct = ({ id, title, price, imageUrl, quantity }) => {
  const { cartProducts, setCartProducts } = useContext(ProductContext);

  const handleRemove = () => {
    axios
      .delete(
        `https://crudcrud.com/api/1f2c3e7a5a78490db6c5f7e2e0ffa1cc/cart/${id}`
      )
      .then(() => {
        setCartProducts((prevCartProducts) =>
          prevCartProducts.filter((product) => product._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error removing product from cart", error);
      });
  };

  return (
    <Card className="card">
      <Card.Title className="cardtitle">{title}</Card.Title>
      <Card.Img className="cardimg" variant="top" src={imageUrl} />
      <Card.Body className="cardbody">
        <Card.Text className="cardtext">Price: {price}</Card.Text>
        <Card.Text className="cardtext">Quantity: {quantity}</Card.Text>
        <Button variant="danger" onClick={handleRemove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartProduct;
