import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import Auth from "./components/Auth/Auth";
import AuthContext from "./components/AuthContext";
import "./App.css";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const authCtx = useContext(AuthContext);

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
      <div className="app-wrapper">
        <UpperHeader  className="customnav" onCartButtonClick={handleCartButtonClick} />
        <LowerHeader />
        <main className="main-content">
          <Routes>
            <Route
              path="/auth"
              element={!authCtx.isLoggedIn ? <Auth /> : <Navigate to="/" />}
            />
            <Route path="/" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/contact"
              element={<Contact onSubmit={handleSubmitForm} />}
            />
            {authCtx.isLoggedIn && (
              <Route path="/product/:productId" element={<ProductDetails />} />
            )}
          </Routes>
        </main>
        {isCartVisible && (
          <Modal onClose={handleCartButtonClick}>
            <CartItem onClose={handleCartButtonClick} />
          </Modal>
        )}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
