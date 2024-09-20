// initial state
const initialState = {
  data: [],
  message: "",
  alreadyExist: false, // to check if the item already exists in the cart or not
  success: false,
};

export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_ADD_WISH_LIST": {
      const alreadyExist = state.data.find(
        (item) => item.productId === action.payload.productId
      );
      if (alreadyExist) {
        return {
          ...state,
          message: "Already Favorite",
          alreadyExist: true,
          success: true,
        };
      } else {
        return {
          ...state,
          data: [...state.data, payload],
          message: "Added to Favorite",
          alreadyExist: false,
          success: true,
        };
      }
    }
    default: {
      return { ...state };
    }
  }
};
