import React,{useState,useContext} from "react";
import { Button } from "react-bootstrap";
import AvailabelProducts from "./AvailabelProducts";
import CartItem from "./CartItem";
import Modal from "./Modal";
import ProductContext from "./ProductContext";
import "./Home.css";

const Home=()=> {



  const [isCartVisible, setIsCartVisible] = useState(false);
const { musicProducts, merchProducts } = useContext(ProductContext);

const handleCartButtonClick = () => {
  setIsCartVisible(!isCartVisible);
};

  return (
    <div>
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
    </div>
  );
}

export default Home;
