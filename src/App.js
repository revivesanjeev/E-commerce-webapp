import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import NavbarDarkExample from "../src/components/Header";
import Containerheader from "./components/Containerheader";
import CARTITEM from "./components/Card";
import Footer from "./components/Footer";
import Album1 from "./components/img/Album 1.png";
import Album2 from "./components/img/Album 2.png";
import Album3 from "./components/img/Album 3.png";
import Album4 from "./components/img/Album 4.png";
import tshirt from "./components/img/Shirt.png";
import coffee from "./components/img/Cofee.png";

const App = () => {

const products=[
  {title:"Album 1",price:"$12.99",imageUrl:Album1},
  {title:"Album 1",price:"$12.99",imageUrl:Album2},
  {title:"Album 1",price:"$12.99",imageUrl:Album3},
  {title:"Album 1",price:"$12.99",imageUrl:Album4},
  {title:"t-shirt",price:"$12.99",imageUrl:tshirt},
  {title:"coffee",price:"$12.99", imageUrl:coffee}
  
]


const musicProducts=products.slice(0,4);
const merchProducts=products.slice(4);










  return (
    <>
      <NavbarDarkExample />
      <Containerheader />

      <h3 className="product">MUSIC</h3>
      <div className="cartitem">
        {musicProducts.map((product,index)=>(
          <CARTITEM 
          key={index}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
          />))}
      </div>

      <h3 className="product">MERCH</h3>
      <div className="cartitem">
        {merchProducts.map((product,index)=>(
          <CARTITEM
          key={index}
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}/>
        ))}
      </div>
      <div className="center-button-container">
        <Button>See the cart</Button>
      </div>
      <Footer/>
    </>
  );
};

export default App;
