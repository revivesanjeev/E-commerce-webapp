import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import AuthContext from "./AuthContext";

function Contact(props) {
  const authCtx = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [queries, setQueries] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      alert("Please login");
      navigate("/auth");
    }
  }, [authCtx.isLoggedIn, navigate]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const dataofform = {
      Name: name,
      email: email,
      mobileno: mobileno,
      queries: queries,
      token: authCtx.id,
    };

    props.onSubmit(dataofform);
    setEmail("");
    setMobileNo("");
    setName("");
    setQueries("");
    alert("We will contact you soon.");
  };

  return (
    authCtx.isLoggedIn && (
      <div className="form">
        <form onSubmit={handleSubmitForm}>
          <h3>Name</h3>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Email-id</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Phone Number</h3>
          <input
            type="tel"
            placeholder="number"
            value={mobileno}
            maxLength="10"
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <input
            type="text"
            className="queries"
            placeholder="Type your queries and issue. We will contact you as soon as possible."
            value={queries}
            onChange={(e) => setQueries(e.target.value)}
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  );
}

export default Contact;
