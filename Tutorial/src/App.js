import React from "react";
import { Header, MessagePopUp, ProductCard, YourCart } from "./components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);
  const userAction = useSelector((state) => state.userAction);

  const [cartItemMessage, setCartItemMessage] = useState(cartItems.message);
  const [wishListMessage, setWishListMessage] = useState(wishList.message);
  const [message, setMessage] = useState("");
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);
  const [itemAlreadyExistsAlert, setItemAlreadyExistsAlert] = useState(false);

  useEffect(() => {
    setCartItemMessage(cartItems.message);
    setWishListMessage(wishList.message);
    setMessage(wishList.message);
    userAction.type === "Cart"
      ? setMessage(cartItems.message)
      : userAction.type === "WishList"
      ? setWishListMessage(wishList.message)
      : "";

    (cartItems.message || wishList.message) !== ""
      ? setShowMessagePopUp(true)
      : setShowMessagePopUp(false);

    userAction.type === "Cart"
      ? setItemAlreadyExistsAlert(cartItems.alreadyExist)
      : userAction.type === "WishList"
      ? setItemAlreadyExistsAlert(wishList.alreadyExist)
      : setItemAlreadyExistsAlert(false);
  }, [cartItems, wishList, userAction]);

  return (
    <div className="w-full">
      <div
        className={`items-center justify-center ${
          showMessagePopUp ? "flex" : "hidden"
        }`}
      >
        <MessagePopUp
          message={message}
          setShowMessagePopUp={setShowMessagePopUp}
          itemAlreadyExistsAlert={itemAlreadyExistsAlert}
          showMessagePopUp={showMessagePopUp}
        />
      </div>

      <Header data={cartItems.data} />
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
              cartItemMessage={cartItemMessage}
              wishListMessage={wishListMessage}
              wishListItem={wishList.data.some(
                (item) => item.productId === product.id
              )}
              setMessage={setMessage}
              addedToWishList={wishList.success}
            />
          );
        })}
      </div>
      {
        // TODO: Use some proper method for this logic
        cartItems.data.length > 0 && (
          <YourCart
            items={products.filter((product) =>
              cartItems.data.some((item) => item.productId === product.id)
            )}
          />
        )
      }
    </div>
  );
};

export default App;
