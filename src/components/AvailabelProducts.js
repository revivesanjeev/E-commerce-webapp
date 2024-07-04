import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AvailabelProduct.css";
import ProductContext from "./ProductContext";
import AuthContext from "./AuthContext";

function AvailabelProduct({ title, price, imageUrl ,id,onClick}) {
   const { addToCart } = useContext(ProductContext);
   const authCtx =useContext(AuthContext);



   const handleAddToCart=(e)=>{
    e.stopPropagation();
    addToCart({title,price,imageUrl,id});
   };


   const handleButtonClick = (e) => {
    e.stopPropagation();
    if (authCtx.isLoggedIn) {
      handleAddToCart(e);
    } else {
      alert("Please login to add your favorite product into the cart");
    }


  };

  return (
    <div onClick={authCtx.isLoggedIn ? onClick : null}>
      <Card className="card">
        <Card.Title className="cardtitle">{title}</Card.Title>
        <Card.Img className="cardimg" variant="top" src={imageUrl} />
        <Card.Body className="cardbody">
          <Card.Text className="cardtext">{price}</Card.Text>
          <Button variant="primary" onClick={handleButtonClick}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AvailabelProduct;
