// initial state
const initialState = {
  data: [],
  message: "",
  alreadyExist: false, // to check if the item already exists in the cart or not
};

export const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      // check if the item already exists
      const itemExist = state.data.find(
        (item) => item.productId === action.payload.productId
      );
      console.log(itemExist);
      if (itemExist) {
        return {
          ...state,
          message: "Item already exists",
          alreadyExist: true,
        };
      }
      return {
        ...state,
        data: [...state.data, payload],
        message: "Item added successfully",
        alreadyExist: false,
      };
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload.productId);
    default:
      return state;
  }
};
