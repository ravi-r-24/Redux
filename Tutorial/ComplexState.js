import { productList } from "./productList.js";
import { createStore } from "redux";

// initial state
const initialState = {
  products: productList,
  cartItems: [],
  cartItemsTotalPrice: 0,
  wishList: [],
};

// reducer
const reducer = (state = initialState, action) => {
  // add product to cartItems
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.cartItems.length > 0) {
        // Check if the item already exists in cart
        const itemExist = state.cartItems.map(
          (item) => item.productId === action.payload.productId
        );

        if (itemExist.includes(true)) {
          return {
            ...state,
          };
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case "REMOVE_FROM_CART": {
      // check if the requested item exists
      const existingProduct = state.cartItems.map(
        (cartItem) => cartItem.productId === action.payload.productId
      );

      if (existingProduct.includes(true)) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.productId !== action.payload.productId
          ),
        };
      }
      return { ...state };
    }
    case "ADD_TO_WISHLIST": {
      if (state.wishList.length > 0) {
        const existingWishList = state.wishList.map(
          (wishList) => wishList.productId === action.payload.productId
        );

        if (existingWishList.includes(true)) {
          return {
            ...state,
          };
        }
      }
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case "REMOVE_PRODUCT": {
      if (state.products.length > 0) {
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
      };
    }
    case "TOTAL_PRICE_OF_CART_ITEMS": {
      if (state.cartItems.length > 0) {
        return {
          ...state,
          cartItemsTotalPrice: state.cartItems
            .map((item) => {
              const totalPricePerItem =
                state.products.find((product) => product.id === item.productId)
                  .price * item.quantity;

              return totalPricePerItem;
            })
            .reduce((itemPrice, currentPrice) => itemPrice + currentPrice, 0),
        };
      }
      return { ...state };
    }
    case "INCREASE_CART_ITEMS_QUANTITY": {
      // check if the passed item exists or not
      const existingCartItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return { ...cartItem };
          }),
        };
      }
    }
    case "DECREASE_CART_ITEMS_QUANTITY": {
      // check if the passed item exists or not
      const existingCartItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return {
              ...cartItem,
            };
          }),
        };
      }
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

// create store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// Actions
const addToCart = {
  type: "ADD_TO_CART",
  payload: { productId: 4, quantity: 8 },
};
const addToWishlist = {
  type: "ADD_TO_WISHLIST",
  payload: { productId: 3 },
};
const addProduct = {
  type: "ADD_PRODUCT",
  payload: {
    id: 21,
    name: "iPhone 15 Pro Max",
    price: 144999,
    category: "Phone",
    image:
      "https://images.macrumors.com/t/SuHt0iQuSjaO-ExOZzJieONGf_I=/2500x/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg",
    description:
      "The iPhone 15 Pro Max features a sleek titanium frame, a stunning 6.7-inch Super Retina XDR display, and Apple's advanced A17 Pro chip. With improved camera capabilities, including a new periscope telephoto lens, and USB-C connectivity, it delivers top-tier performance and versatility in a premium design.",
    rating: {
      rate: 4.2,
      count: 1000000000,
    },
  },
};
const removeProduct = {
  type: "REMOVE_PRODUCT",
  payload: { id: 2 },
};
const removeCartItem = {
  type: "REMOVE_FROM_CART",
  payload: { productId: 4 },
};
const totalPriceOfCartItems = {
  type: "TOTAL_PRICE_OF_CART_ITEMS",
};
const increaseCartItemsQuantity = {
  type: "INCREASE_CART_ITEMS_QUANTITY",
  payload: { productId: 4 },
};
const decreaseCartItemsQuantity = {
  type: "DECREASE_CART_ITEMS_QUANTITY",
  payload: { productId: 5 },
};

// subscribe to state changes
store.subscribe(() => console.log(store.getState())); // The callback function will be called, every-time the state changes/updated

// dispatch actions
store.dispatch(addToCart);
store.dispatch({
  type: "ADD_TO_CART",
  payload: { productId: 5, quantity: 82 },
});
store.dispatch(addToWishlist);
store.dispatch(addProduct);
store.dispatch(removeProduct);
// store.dispatch(removeCartItem);
store.dispatch(totalPriceOfCartItems);
store.dispatch(increaseCartItemsQuantity);
store.dispatch(decreaseCartItemsQuantity);
