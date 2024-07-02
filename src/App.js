import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpperHeader from "./components/UpperHeader";
import LowerHeader from "./components/LowerHeader";
import Modal from "./components/Modal";
import CartItem from "./components/CartItem";
import Store from "./components/Store";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  async function handleSubmitForm(dataofform) {
    await fetch(
      "https://ecommerceapp-bc56b-default-rtdb.firebaseio.com//Customerqueries.json",
      {
        method: "POST",
        body: JSON.stringify(dataofform),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <Router>
      <UpperHeader onCartButtonClick={handleCartButtonClick} />
      <LowerHeader />
      <Routes>
        <Route path="/"  element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/contact"
          element={<Contact onSubmit={handleSubmitForm} />}
        />
         <Route path="/product/:productId" element={<ProductDetails />} />
      
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
