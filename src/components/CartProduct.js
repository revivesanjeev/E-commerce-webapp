import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CartProduct.css";

const CartProduct = ({ title, price, imageUrl, quantity }) => {
  return (
   
      <Card className="card">
        <Card.Title className="cardtitle">{title}</Card.Title>
        <Card.Img className="cardimg" variant="top" src={imageUrl} />
        <Card.Body className="cardbody">
          <Card.Text className="cardtext">Price: {price}</Card.Text>
          <Card.Text className="cardtext">Quantity: {quantity}</Card.Text>
          <Button variant="danger">Remove</Button>
        </Card.Body>
      </Card>

  );
};

export default CartProduct;
