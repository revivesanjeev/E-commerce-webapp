import React, { useState } from "react";
import "./Contact.css";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [queries, setQueries] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const dataofform = {
      Name: name,
      email: email,
      mobileno: mobileno,
      queries: queries,
    };

    props.onSubmit(dataofform);
    setEmail("");
    setMobileNo("");
    setName("");
    setQueries("");
  };

  return (
    <div className="form">
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
        type="number"
        placeholder="number"
        value={mobileno}
        onChange={(e) => setMobileNo(e.target.value)}
      />
      <input
        type="text"
        className="queries"
        placeholder="type your queries and issue. we will contact you as soon as possible"
        value={queries}
        onChange={(e) => setQueries(e.target.value)}
      />
      <button
        className="submit-button"
        type="submit"
        onClick={handleSubmitForm}
      >
        Submit
      </button>
    </div>
  );
}

export default Contact;
