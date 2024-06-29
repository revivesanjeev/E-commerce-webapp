import React, { useContext, useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import UpperHeader from "./components/UpperHeader";
import LowerHeader from "./components/LowerHeader";
import AvailabelProducts from "./components/AvailabelProducts";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ProductContext from "./components/ProductContext";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { musicProducts, merchProducts } = useContext(ProductContext);

  const handleCartButtonClick = () => {
    setIsCartVisible(!isCartVisible);
  };

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