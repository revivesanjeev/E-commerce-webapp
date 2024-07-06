import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AvailabelProduct.css";
import ProductContext from "./ProductContext";
import AuthContext from "./AuthContext";
import axios from "axios";


function AvailabelProduct({ title, price, imageUrl ,id,onClick}) {
   const { addToCart, cartProducts } = useContext(ProductContext);
   const authCtx =useContext(AuthContext);



   
  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart({ title, price, imageUrl, id });

    const cartProduct = cartProducts.find((product) => product.id === id) || {
      quantity: 1,
    };

    const userCartDetails = {
      email: authCtx.email,
      productTitle: title,
      cartQuantity: cartProduct.quantity,
    };

    axios
      .post(
        "https://crudcrud.com/api/1f2c3e7a5a78490db6c5f7e2e0ffa1cc",
        userCartDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Data posted successfully", response.data);
      })
      .catch((error) => {
        console.error("Error posting data", error);
      });
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
