import { productList } from "../../productList.js";

// initial state
const initialState = productList;

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_ADD_PRODUCT": {
      return [...state, action.payload];
    }
    case "ACTION_GET_PRODUCTS": {
      return [...state];
    }
    case "ACTION_REMOVE_PRODUCT": {
      // TODO: Shift the logic to delete the product to the mapper
      return state.filter((product) => product.id !== action.payload.productId);
    }
    case "ACTION_UPDATE_PRODUCT": {
      // TODO: Shift the logic to update the product to the mapper
      const targetProductIndex = state.findIndex(
        (product) => product.id === action.payload.productId
      );

      const targetKey = action.payload.updatedFields.name;
      const newValue = action.payload.updatedFields.value;

      return state.map((product, index) =>
        index === targetProductIndex
          ? { ...product, targetKey: newValue }
          : product
      );
    }
    default:
      return [...state];
  }
};
