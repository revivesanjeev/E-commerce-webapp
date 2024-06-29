import React, { createContext, useState } from "react";
import Album1 from "./img/Album 1.png";
import Album2 from "./img/Album 2.png";
import Album3 from "./img/Album 3.png";
import Album4 from "./img/Album 4.png";
import tshirt from "./img/Shirt.png";
import coffee from "./img/Cofee.png";

const ProductContext = createContext();

const initialProducts = [
  { title: "Album 1", price: "$12.99", imageUrl: Album1 },
  { title: "Album 2", price: "$12.99", imageUrl: Album2 },
  { title: "Album 3", price: "$12.99", imageUrl: Album3 },
  { title: "Album 4", price: "$12.99", imageUrl: Album4 },
  { title: "t-shirt", price: "$12.99", imageUrl: tshirt },
  { title: "coffee", price: "$12.99", imageUrl: coffee },
];

export const ProductProvider = ({ children }) => {
  
  const [cartProducts, setCartProducts] = useState([]);

 
  const addToCart = (product) => {
    setCartProducts((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.title === product.title
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const musicProducts = initialProducts.slice(0, 4);
  const merchProducts = initialProducts.slice(4);

  return (
    <ProductContext.Provider
      value={{ musicProducts, merchProducts, cartProducts, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
