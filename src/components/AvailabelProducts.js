import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AvailabelProduct.css";
import ProductContext from "./ProductContext";

function AvailabelProduct({ title, price, imageUrl }) {
   const { addToCart } = useContext(ProductContext);

   const handleAddToCart=()=>{
    addToCart({title,price,imageUrl});
   };

  return (
    <Card className="card">
      <Card.Title className="cardtitle">{title}</Card.Title>
      <Card.Img className="cardimg" variant="top" src={imageUrl} />
      <Card.Body className="cardbody">
        <Card.Text className="cardtext">{price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AvailabelProduct;
