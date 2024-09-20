// initial state
const initialState = {
  data: [],
  message: "",
  alreadyExist: false, // to check if the item already exists in the cart or not
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
          message: "Item already exists in cart! Please check your cart to buy",
          alreadyExist: true,
        };
      }
      return {
        ...state,
        data: [...state.data, payload],
        message: "Item added to cart successfully",
        alreadyExist: false,
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        data: state.data.filter(
          (item) => item.productId !== action.payload.productId
        ),
        message: "Item removed from cart successfully",
      };
    case "INCREASE_ADDED_ITEM_QUANTITY": {
      let targetItem = state.data.find(
        (item) => item.productId === action.payload.productId
      );

      const targetItemIndex = state.data.findIndex(
        (item) => item.productId === action.payload.productId
      );

      const itemWithUpdatedQuantity = {
        ...targetItem,
        quantity: targetItem.quantity + 1,
      };

      state.data.splice(targetItemIndex, 1, itemWithUpdatedQuantity);
      return {
        ...state,
        data: [...state.data],
        message: "Quantity of item updated successfully",
      };
    }
    case "DECREASE_ADDED_ITEM_QUANTITY": {
      // TODO: Code repetition taken place
      let targetItem = state.data.find(
        (item) => item.productId === action.payload.productId
      );

      const targetItemIndex = state.data.findIndex(
        (item) => item.productId === action.payload.productId
      );

      const itemWithUpdatedQuantity = {
        ...targetItem,
        quantity:
          targetItem.quantity > 0
            ? targetItem.quantity - 1
            : targetItem.quantity,
      };

      state.data.splice(targetItemIndex, 1, itemWithUpdatedQuantity);
      return {
        ...state,
        data: [...state.data],
        message: "Quantity of item updated successfully",
      };
    }
    default:
      return state;
  }
};
