import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./download.jpeg";

function BasicExample() {
  return (
    <Card style={{ width: "20rem", height: "20rem", margin: "8px", padding:"5px", justifyContent:"center" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>Album 1 </Card.Title>
        <Card.Text style={{ fontSize: "0.9rem", color:"black"}}>$12.99</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

