import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import UpperHeader from "./components/Header";
import LowerHeader from "./components/Containerheader";
import AvailabelProducts from "./components/AvailabelProducts";
import Album1 from "./components/img/Album 1.png";
import Album2 from "./components/img/Album 2.png";
import Album3 from "./components/img/Album 3.png";
import Album4 from "./components/img/Album 4.png";
import tshirt from "./components/img/Shirt.png";
import coffee from "./components/img/Cofee.png";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import Modal from "./components/Modal";



const App = () => {
const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  const products = [
    { title: "Album 1", price: "$12.99", imageUrl: Album1 },
    { title: "Album 2", price: "$12.99", imageUrl: Album2 },
    { title: "Album 3", price: "$12.99", imageUrl: Album3 },
    { title: "Album 4", price: "$12.99", imageUrl: Album4 },
    { title: "t-shirt", price: "$12.99", imageUrl: tshirt },
    { title: "coffee", price: "$12.99", imageUrl: coffee  },
  ];

  const musicProducts = products.slice(0, 4);
  const merchProducts = products.slice(4);

  return (
    <>
      <UpperHeader onCartButtonClick={handleCartButtonClick} />
      <LowerHeader />

      <h3 className="product">MUSIC</h3>
      <div className="cartitem">
        {musicProducts.map((product, index) => (
          <AvailabelProducts
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

      <h3 className="product">MERCH</h3>
      <div className="cartitem">
        {merchProducts.map((product, index) => (
          <AvailabelProducts
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
      <div className="center-button-container">
        <Button onClick={handleCartButtonClick}>See the cart</Button>
      </div>

      {isCartVisible && (
        <Modal onClose={handleCartButtonClick}>
          <CartItem onClose={handleCartButtonClick} />
        </Modal>
      )}
    
      <Footer />
    </>
  );
};

export default App;
