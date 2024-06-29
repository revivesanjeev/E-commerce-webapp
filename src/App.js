import React, {  useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpperHeader from "./components/UpperHeader";
import LowerHeader from "./components/LowerHeader";
import Modal from "./components/Modal";
import CartItem from "./components/CartItem";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";




const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);


  const handleCartButtonClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <Router>
      <UpperHeader onCartButtonClick={handleCartButtonClick} />
      <LowerHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {isCartVisible && (
        <Modal onClose={handleCartButtonClick}>
          <CartItem onClose={handleCartButtonClick} />
        </Modal>
      )}
      <Footer />
    </Router>
  );
};

export default App;