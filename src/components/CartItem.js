import React, { useContext } from "react";
import CartProduct from "./CartProduct";
import "./CartItem.css";
import ProductContext from "./ProductContext";




const CartItem = ({ onClose }) => {

   const { cartProducts } = useContext(ProductContext);
  return (
    <>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {cartProducts.map((product, index) => (
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
