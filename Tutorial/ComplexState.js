import { productList } from "./productList.js";
import { createStore } from "redux";

// initial state
const initialState = {
  products: productList,
  cartItems: [
    {
      productId: undefined,
      quantity: undefined,
    },
  ],
  wishList: [
    {
      productId: undefined,
    },
  ],
};

// reducer
const reducer = (state = initialState, action) => {
  // add product to cartItems
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check if the item already exists in cart
      const itemExist = state.cartItems.map(
        (item) => item.productId === action.payload.productId
      );

      if (itemExist.includes(true)) {
        return {
          ...state,
        };
      }
      return {
        products: [...state.products],
        cartItems: [
          ...state.cartItems,
          {
            productId: action.payload.productId,
            quantity: action.payload.quantity,
          },
        ],
        wishList: [...state.wishList],
      };
    }
    case "ADD_TO_WISHLIST": {
      const existingWishList = state.wishList.map(
        (wishList) => wishList.productId === action.payload.productId
      );

      if (existingWishList.includes(true)) {
        return {
          ...state,
        };
      }
      return {
        products: [...state.products],
        cartItems: [...state.cartItems],
        wishList: [...state.wishList, { productId: action.payload.productId }],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

// create store
const store = createStore(reducer, window._REDUX_DEVTOOLS_EXTENSION_?.());

// Actions
const addToCartAction = {
  type: "ADD_TO_CART",
  payload: { productId: 2, quantity: 8 },
};
const addToWishlist = {
  type: "ADD_TO_WISHLIST",
  payload: { productId: 3 },
};
const addProduct = {
  type: "ADD_PRODUCT",
  payload: { id: 4, name: "Product 4", price: 123 },
};

// subscribe to state changes
store.subscribe(() => console.log(store.getState())); // The callback function will be called, every-time the state changes/updated

// dispatch actions
store.dispatch(addToCartAction);
store.dispatch(addToWishlist);
store.dispatch(addProduct);
