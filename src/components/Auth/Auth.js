import React, { useRef, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AuthContext from "../AuthContext";
import classes from "./Auth.module.css"; // Import CSS module

function Auth() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate("/"); // Redirect to home if logged in
    }
  }, [authCtx.isLoggedIn, navigate]);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = event.target.email.value;
    const enteredPassword = event.target.password.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJIkBrOnoaPwUY4jvNca22GzYW342Lftk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJIkBrOnoaPwUY4jvNca22GzYW342Lftk";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/"); // Redirect to home after login
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleFormSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            minLength={7}
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {isLoading ? (
            <p>Sending request...</p>
          ) : (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Auth;
