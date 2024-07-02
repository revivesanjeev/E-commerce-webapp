import React, { createContext, useState } from "react";
import turntableImage from "./img/Album 1.png";
import smartwatchImage from "./img/Album 2.png";
import laptopBagImage from "./img/Album 3.png";
import chocolatesImage from "./img/Album 4.png";
import headphonesImage from "./img/Shirt.png";
import bluetoothSpeakerImage from "./img/Cofee.png";

const ProductContext = createContext();

const initialProducts = [
  {
    id: 1,
    title: "Classic Turntable with Speakers",
    price: "$249.99",
    imageUrl: turntableImage,
    description:
      "Experience high-fidelity audio with this classic turntable equipped with built-in speakers.",
    userReviews: [
      {
        id: 1,
        username: "MusicEnthusiast1",
        comment: "Excellent sound quality!",
      },
      {
        id: 2,
        username: "VinylCollector22",
        comment: "Great addition to my collection!",
      },
    ],
    rating: 4.7,
    paymentOptions: ["Credit Card", "Debit Card", "PayPal"],
  },
  {
    id: 2,
    title: "Smartwatch Fitness Tracker",
    price: "$129.99",
    imageUrl: smartwatchImage,
    description:
      "Stay fit and connected with this smartwatch fitness tracker with GPS and heart rate monitor.",
    userReviews: [
      {
        id: 1,
        username: "FitnessFanatic99",
        comment: "Love the fitness tracking features!",
      },
      { id: 2, username: "TechGuru555", comment: "Very accurate and stylish!" },
    ],
    rating: 4.4,
    paymentOptions: ["Credit Card", "PayPal", "UPI"],
  },
  {
    id: 3,
    title: "Leather Laptop Bag",
    price: "$79.99",
    imageUrl: laptopBagImage,
    description:
      "Premium leather laptop bag with compartments for laptops, tablets, and accessories.",
    userReviews: [
      {
        id: 1,
        username: "BusinessProfessional3",
        comment: "High-quality craftsmanship!",
      },
      {
        id: 2,
        username: "FashionForward23",
        comment: "Stylish and functional!",
      },
    ],
    rating: 4.9,
    paymentOptions: ["Credit Card", "Debit Card", "Cash on Delivery"],
  },
  {
    id: 4,
    title: "Gourmet Chocolate Assortment",
    price: "$39.99",
    imageUrl: chocolatesImage,
    description:
      "Indulge in a variety of gourmet chocolates handcrafted by master chocolatiers.",
    userReviews: [
      {
        id: 1,
        username: "Chocoholic777",
        comment: "Divine chocolate flavors!",
      },
      {
        id: 2,
        username: "GiftRecipient456",
        comment: "Perfect gift for any occasion!",
      },
    ],
    rating: 4.6,
    paymentOptions: ["Credit Card", "UPI", "PayPal"],
  },
  {
    id: 5,
    title: "Wireless Noise-Canceling Headphones",
    price: "$199.99",
    imageUrl: headphonesImage,
    description:
      "Immerse yourself in music with these wireless headphones featuring active noise cancellation.",
    userReviews: [
      {
        id: 1,
        username: "MusicLover987",
        comment: "Best headphones I've owned!",
      },
      {
        id: 2,
        username: "Audiophile222",
        comment: "Crystal-clear sound quality!",
      },
    ],
    rating: 4.8,
    paymentOptions: ["Credit Card", "Debit Card", "PayPal"],
  },
  {
    id: 6,
    title: "Portable Bluetooth Speaker",
    price: "$59.99",
    imageUrl: bluetoothSpeakerImage,
    description:
      "Take your music anywhere with this portable Bluetooth speaker with long battery life.",
    userReviews: [
      {
        id: 1,
        username: "MusicOnTheGo123",
        comment: "Great sound for its size!",
      },
      {
        id: 2,
        username: "OutdoorEnthusiast456",
        comment: "Perfect for outdoor adventures!",
      },
    ],
    rating: 4.3,
    paymentOptions: ["Credit Card", "Debit Card", "Cash on Delivery"],
  },
];



export const ProductProvider = ({ children }) => {
  
  const [cartProducts, setCartProducts] = useState([]);

 
  const addToCart = (product) => {
    setCartProducts((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.title === product.title
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const musicProducts = initialProducts.slice(0, 4);
  const merchProducts = initialProducts.slice(4);

  return (
    <ProductContext.Provider
      value={{ musicProducts, merchProducts, cartProducts, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
