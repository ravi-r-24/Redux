// Initial state
let initialState = {
  name: "Ravi Raushan Kumar",
  id: 1,
  accountType: "Saving",
  balance: 10000,
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.payload };
    case "WITHDRAW":
      if (state.balance >= action.payload) {
        return { ...state, balance: state.balance - action.payload };
      } else {
        console.log("Insufficient balance");
        return state;
      }
    case "CHECK BALANCE":
      return { ...state, balance: state.balance };
    default:
      return state;
  }
};

// Actions

const depositAction = { type: "DEPOSIT", payload: 5000 };
const withdrawAction = { type: "WITHDRAW", payload: 3000 };
const checkBalanceAction = { type: "CHECK BALANCE" };

// deposit balance
initialState = reducer(initialState, depositAction);
// console.log(
//   `Balance after deposit of ${depositAction.payload} is: ${initialState.balance}`
// );

// withdraw balance
initialState = reducer(initialState, withdrawAction);
// console.log(
//   `Balance after withdraw of ${withdrawAction.payload} is: ${initialState.balance}`
// );

// check balance
initialState = reducer(initialState, checkBalanceAction);
console.log(`Available balance is: ${initialState.balance}`);
