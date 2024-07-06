import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
  cartProducts: [],
  setCartProducts: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [cartProducts, setCartProducts] = useState([]);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setCartProducts([]);
  };

const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setIsLoggedIn(true);

    fetchCartProducts();
  };

    const fetchCartProducts = () => {
      axios
        .get(`https://crudcrud.com/api/1f2c3e7a5a78490db6c5f7e2e0ffa1cc/cart`)
        .then((response) => {
          setCartProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cart details", error);
        });
    };





useEffect(() => {
  const storedToken = localStorage.getItem("token");
  const storedEmail = localStorage.getItem("email");

  if (storedToken) {
    setToken(storedToken);
    setEmail(storedEmail);
    setIsLoggedIn(true);
    fetchCartProducts();
  }
}, []);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    email: email,
    login: loginHandler,
    logout: logoutHandler,
    cartProducts: cartProducts,
    setCartProducts: setCartProducts,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
