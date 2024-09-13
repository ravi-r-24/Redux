import React from "react";
import ProductCard from "./components/ProductCard.js";
import "./index.css";
import Header from "./components/Header.js";
import { useSelector } from "react-redux";
import MessagePopUp from "./components/MessagePopUp.js";
import { useState, useEffect } from "react";

const App = () => {
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);

  const [showPopUp, setShowPopUp] = useState();
  const [messagePopUpHeight, setMessagePopUpHeight] = useState(0);
  const [cartMessage, setCartMessage] = useState(cartItems.message);
  const [wishListMessage, setWishListMessage] = useState(wishList.message);
  const [message, setMessage] = useState();

  console.log(cartMessage);
  console.log(wishListMessage);

  const wishListData = wishList.data;

  useEffect(() => setShowPopUp(true), [cartItems.data, cartItems.message]);
  useEffect(() => {
    setMessage(message);
  });

  const messageTypeSetter = (messageType) => {
    console.log(message);
    switch (messageType) {
      case "Cart": {
        setMessage(cartItems.message);
        break;
      }
      case "WishList": {
        setMessage(wishList.message);
        break;
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        {cartMessage || wishListMessage ? (
          <MessagePopUp
            alreadyExist={cartItems.alreadyExist}
            message={message}
            showPopUp={showPopUp}
            setShowPopUp={setShowPopUp}
            setMessagePopUpHeight={setMessagePopUpHeight}
          />
        ) : (
          ""
        )}
      </div>

      <Header data={cartItems.data} messagePopUpHeight={messagePopUpHeight} />
      <div className="flex flex-wrap px-8">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              rate={product.rating?.rate}
              price={product.price}
              image={product.image}
              wishListItem={wishListData.some(
                (wishList) => wishList.productId === product.id
              )}
              messageTypeSetter={messageTypeSetter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
