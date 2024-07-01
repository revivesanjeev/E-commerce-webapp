import React from 'react';
import "./Home.css";

const Home=()=> {

     const tickets = [
       {
         date: "JUL 16",
         city: "DETROIT, MI",
         place: "DTE ENERGY MUSIC THEATRE",
       },
       { date: "JUL 19", city: "TORONTO, ON", place: "BUDWEISER STAGE" },
       { date: "JUL 22", city: "BRISTOW, VA", place: "JIGGY LUBE LIVE" },
       { date: "JUL 29", city: "PHOENIX, AZ", place: "AK-CHIN PAVILION" },
       { date: "AUG 02", city: "CONCORD, CA", place: "CONCORD PAVILION" },
       { date: "AUG 05", city: "LAS VEGAS, NY", place: "T-MOBILE ARENA" },
     ];


  return (
    <section className="tickets">
      <h1>Book Tickets</h1>
      <ul className="ticket-list">
        {tickets.map((ticket, index) => {
          return (
            <li className="ticket-items" key={index}>
              <div className="date">{ticket.date}</div>
              <div className="city">{ticket.city}</div>
              <div className="place">{ticket.place}</div>
              <button type="button">Book</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Home;
