import { actionCreator } from "./ActionCreator.js";

// Action creator functions
export const addToCartAction = (productId, quantity = 1) =>
  actionCreator(
    (type = "ADD_TO_CART"),
    (payload = { productId: productId, quantity: quantity })
  );

export const removeItemFromCart = (productId) =>
  actionCreator(
    (type = "REMOVE_ITEM_FROM_CART"),
    (payload = { productId: productId })
  );
