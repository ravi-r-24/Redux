const initialState = {
  type: "",
};

export const userActionTypeReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "USER_ACTION": {
      console.log("action type: " + action.type);
      return { ...state, type: action.payload };
    }
    default:
      return { ...state };
  }
};
