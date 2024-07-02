import React,{useState,useContext} from "react";
import { Button } from "react-bootstrap";
import AvailabelProducts from "./AvailabelProducts";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import Modal from "./Modal";
import ProductContext from "./ProductContext";
import "./Store.css";



const Store=()=> {
const [isCartVisible, setIsCartVisible] = useState(false);
const { musicProducts, merchProducts } = useContext(ProductContext);
const navigate = useNavigate();

const handleCartButtonClick = () => {
  setIsCartVisible(!isCartVisible);
};

const handleProductClick = (productId) => {
  navigate(`/product/${productId}`);
};


  return (
    <div>
      <h3 className="product">MUSIC</h3>
      <div className="cartitem">
        {musicProducts.map((product, index) => (
          <AvailabelProducts
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
      <h3 className="product">MERCH</h3>
      <div className="cartitem">
        {merchProducts.map((product, index) => (
          <AvailabelProducts
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            onClick={() => handleProductClick(product.id)}
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

export default Store;
