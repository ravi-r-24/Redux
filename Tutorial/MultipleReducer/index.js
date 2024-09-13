import { combineReducers } from "redux";
import { productsReducer, cartReducer, wishListReducer } from "./reducers";
import { createStore } from "redux";
import {
  addProductAction,
  getProductAction,
  removeProductAction,
  updateProductAction,
} from "./actions/Products.js";

// Combine all reducers into a single root reducer
const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

// Create store
export const store = createStore(reducer);

// subscribe to state changes
store.subscribe(() => console.log(store.getState())); // The callback function will be called, every-time the state changes/updated

store.dispatch(addProductAction);
store.dispatch(getProductAction);
store.dispatch(removeProductAction);
store.dispatch(updateProductAction);
