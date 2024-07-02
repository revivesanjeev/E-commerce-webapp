import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductContext from "./ProductContext";
import "./ProductDetails.css"; // Import the new CSS file

const ProductDetails = () => {
  const { productId } = useParams();
  const { musicProducts, merchProducts, addToCart } =
    useContext(ProductContext);

  const allProducts = [...musicProducts, ...merchProducts];
  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <div className="product-details">
      <Card className="card">
        <Card.Title className="cardtitle">{product.title}</Card.Title>
        <Card.Img className="cardimg" variant="top" src={product.imageUrl} />
        <Card.Body className="cardbody">
          <Card.Text className="cardtext">Price: {product.price}</Card.Text>
          <Card.Text className="cardtext cardtext-description">
            {product.description}
          </Card.Text>
          <div className="rating-container">
            <span className="rating-stars">{renderStars(product.rating)}</span>
            <span className="rating-text">
              {product.rating.toFixed(1)} Stars
            </span>
          </div>
          <div className="button-container">
            <Button variant="primary" onClick={handleAddToCart}>
              Add To Cart
            </Button>
            <Button variant="secondary">Buy Now</Button>
          </div>

          <div className="payment-options">
            <h4>Payment Options</h4>
            <ul>
              {product.paymentOptions.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>

          <div className="user-reviews">
            <h4>User Reviews</h4>
            {product.userReviews.map((review) => (
              <div key={review.id} className="review">
                <strong>{review.username}:</strong> {review.comment}
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star"></i>);
  }

  if (halfStars) {
    stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
  }

  return stars;
};

export default ProductDetails;
