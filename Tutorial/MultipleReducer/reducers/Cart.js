// initial state
const initialState = {
  data: [],
  message: "",
  alreadyExist: false, // to check if the item already exists in the cart or not
  showPopUp: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // check if the item already exists
      const itemExist = state.data.find(
        (item) => item.productId === action.payload.productId
      );
      if (itemExist) {
        return {
          ...state,
          message: "Item already exists",
          alreadyExist: true,
          showPopUp: true,
        };
      }
      return {
        ...state,
        data: [...state.data, payload],
        message: "Item added successfully",
        alreadyExist: false,
        showPopUp: true,
      };
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload.productId);
    default:
      return state;
  }
};
