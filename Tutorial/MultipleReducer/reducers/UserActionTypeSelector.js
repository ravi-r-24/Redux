const initialState = {
  type: "",
};

export const userActionTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ACTION": {
      return { ...state, type: action.payload };
    }
    default:
      return { ...state };
  }
};
