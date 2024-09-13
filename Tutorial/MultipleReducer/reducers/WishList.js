// initial state
const initialState = {
  data: [],
  message: "",
};

export const wishListReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ACTION_ADD_WISH_LIST": {
      return {
        ...state,
        data: [...state.data, payload],
        message: "Added to Favorite",
      };
    }
    default: {
      return { ...state };
    }
  }
};
