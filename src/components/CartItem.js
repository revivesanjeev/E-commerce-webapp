import React from "react";
import CartProduct from "./CartProduct";
import "./CartItem.css";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartItem = ({ onClose }) => {
  return (
    <>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {cartElements.map((product, index) => (
          <CartProduct
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
          />
        ))}
    </>
  );
};

export default CartItem;
