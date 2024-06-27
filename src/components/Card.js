import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css";

function CARTITEM({ title, price, imageUrl }) {
  return (
    <Card className="card">
      <Card.Title className="cardtitle">{title}</Card.Title>
      <Card.Img className="cardimg" variant="top" src={imageUrl} />
      <Card.Body className="cardbody">
        <Card.Text className="cardtext">{price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CARTITEM;
