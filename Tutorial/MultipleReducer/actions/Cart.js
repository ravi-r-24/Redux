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

export const increaseAddedItemQuantity = (productId) =>
  actionCreator(
    (type = "INCREASE_ADDED_ITEM_QUANTITY"),
    (payload = { productId: productId })
  );
