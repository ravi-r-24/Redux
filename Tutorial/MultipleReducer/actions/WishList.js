import { actionCreator } from "./ActionCreator.js";

export const addToWishListAction = (productId) =>
  actionCreator(
    (type = "ACTION_ADD_WISH_LIST"),
    (payload = { productId: productId })
  );
