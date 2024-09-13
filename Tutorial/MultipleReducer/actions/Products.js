import { actionCreator } from "./ActionCreator.js";

// Action creator function
export const addProductAction = actionCreator(
  (type = "ACTION_ADD_PRODUCT"),
  (payload = {
    id: 23,
    title: "Pen",
    price: 999,
    description: "This is a pen.",
    category: "stationery",
    thumbnail:
      "https://www.lapisbard.com/cdn/shop/files/PDP-1_800x.jpg?v=1695096574",
  })
);

export const getProductAction = actionCreator((type = "ACTION_GET_PRODUCTS"));

export const removeProductAction = actionCreator(
  (type = "ACTION_REMOVE_PRODUCT"),
  (payload = { productId: 3 })
);

export const updateProductAction = actionCreator(
  (type = "ACTION_UPDATE_PRODUCT"),
  (payload = { productId: 1, updatedFields: { name: "price", value: 999 } })
);
