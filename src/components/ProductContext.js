import React, { createContext, useState } from "react";


import chocolatesImage1 from "./img/chocolate image/CHOCOLATEIMAGE1.jpeg";
import chocolatesImage2 from "./img/chocolate image/CHOCOLATEIMAGE2.jpeg";
import chocolatesImage3 from "./img/chocolate image/CHOCOLATEIMAGE3.jpeg";
import chocolatesImage4 from "./img/chocolate image/CHOCOLATEIMAGE4.jpeg";

import headphones1 from "./img/Headphones/headPhones1.webp";
import headphones2 from "./img/Headphones/headPhones2.webp";
import headphones3 from "./img/Headphones/headPhones3.webp";
import headphones4 from "./img/Headphones/headphonesimage4.webp";

import Laptopbag from "./img/LaptopBag/LaptopBag.webp";
import Laptopbag1 from "./img/LaptopBag/laptopBag2.webp";
import Laptopbag2 from "./img/LaptopBag/laptopbag3.webp";
import Laptopbag3 from "./img/LaptopBag/laptopBag4.webp";
import Laptopbag4 from "./img/LaptopBag/laptopBag5.webp";


import smartwatchImage1 from "./img/smartwatch/smartwatch1.webp";
import smartwatchImage2 from "./img/smartwatch/smartwatch2.webp";
import smartwatchImage3 from "./img/smartwatch/smartwatch3.webp";
import smartwatchImage4 from "./img/smartwatch/smartwatch4.webp";


import bluetoothSpeakerImage1 from "./img/bluetooth1/speaker1.webp";
import bluetoothSpeakerImage2 from "./img/bluetooth1/speaker2.webp";
import bluetoothSpeakerImage3 from "./img/bluetooth1/speaker3.webp";
import bluetoothSpeakerImage4 from "./img/bluetooth1/speaker4.webp";
import bluetoothSpeakerImage5 from "./img/bluetooth1/speaker5.webp";




import turntable1 from "./img/Turntableimage/turntable image 1.jpeg";
import turntable2 from "./img/Turntableimage/turntable image2.jpeg";
import turntable3 from "./img/Turntableimage/turntable image3.jpeg";
import turntable4 from "./img/Turntableimage/turntable image4.jpg";




const ProductContext = createContext();

const initialProducts = [
  {
    id: 1,
    title: "Classic Turntable with Speakers",
    price: "$249.99",
    imageUrl:turntable1,
    images: [ turntable1, turntable2, turntable3, turntable4],
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
    imageUrl:smartwatchImage1,
    images: [
      smartwatchImage1,
      smartwatchImage2,
      smartwatchImage3,
      smartwatchImage4,
    ],
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
    imageUrl: Laptopbag,
    images: [Laptopbag, Laptopbag1, Laptopbag2, Laptopbag3, Laptopbag4],
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
    imageUrl: chocolatesImage1,
    images: [
      
      chocolatesImage1,
      chocolatesImage2,
      chocolatesImage3,
      chocolatesImage4,
    ],
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
    imageUrl:headphones1,
    images: [
     
      headphones1,
      headphones2,
      headphones3,
      headphones4,
    ],
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
    imageUrl:bluetoothSpeakerImage1,
    images: [
      
      bluetoothSpeakerImage1,
      bluetoothSpeakerImage2,
      bluetoothSpeakerImage3,
      bluetoothSpeakerImage4,
      bluetoothSpeakerImage5,
    ],
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
