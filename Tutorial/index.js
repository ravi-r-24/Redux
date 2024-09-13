// import { createStore } from "redux";

// // Initial state
// let initialState = {
//   name: "Ravi Raushan Kumar",
//   id: 1,
//   accountType: "Saving",
//   balance: 10000,
// };

// // reducer function
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "DEPOSIT":
//       return { ...state, balance: state.balance + action.payload };
//     case "WITHDRAW":
//       if (state.balance >= action.payload) {
//         return { ...state, balance: state.balance - action.payload };
//       } else {
//         console.log("Insufficient balance");
//         return state;
//       }
//     case "CHECK BALANCE":
//       return { ...state, balance: state.balance };
//     default:
//       return state;
//   }
// };

// // Actions

// const depositAction = { type: "DEPOSIT", payload: 5000 };
// const withdrawAction = { type: "WITHDRAW", payload: 3000 };
// const checkBalanceAction = { type: "CHECK BALANCE" };

// // deposit balance
// // initialState = reducer(initialState, depositAction);
// // console.log(
// //   `Balance after deposit of ${depositAction.payload} is: ${initialState.balance}`
// // );

// // withdraw balance
// // initialState = reducer(initialState, withdrawAction);
// // console.log(
// //   `Balance after withdraw of ${withdrawAction.payload} is: ${initialState.balance}`
// // );

// // check balance
// // initialState = reducer(initialState, checkBalanceAction);
// // console.log(`Available balance is: ${initialState.balance}`);

// // create store

// console.log("Create Store:", createStore(reducer));

// // createStore(reducer); --> It will return a store
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
// console.log(store.getState());

// // update the state

// // TODO: dispatch method of store, is used to call the reducer function in the store

// console.log(store.dispatch(depositAction));
// console.log(store.getState());

// // dispatch all the actions
// store.dispatch(withdrawAction);
// console.log(store.getState());

// store.dispatch(checkBalanceAction);
// console.log(store.getState());

// // TODO: In the above code, one problem is that "On state update, we have to console.log(store.getState()) to get the updated state"

// // To solve this problem, we have ⁡⁢⁢⁣store.subscribe⁡ method

// // How ⁡⁢⁢⁣store.subscribe⁡ method works

// store.subscribe(() => console.log(store.getState())); // The callback function will be called, every-time the state changes/updated

// store.dispatch(checkBalanceAction);
// store.dispatch(depositAction);

// // Have Some Fun Activities
// const depositButton = document.getElementById("depositButton");
// const rootElement = document.getElementById("root");

// depositButton.addEventListener("click", () => {
//   store.dispatch({ type: "DEPOSIT", payload: 10000 });
//   rootElement.innerHTML = `Current Balance: ${store.getState().balance}`;
// });

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.js";
import { Provider } from "react-redux";
import { store } from "./MultipleReducer";

const Index = () => {
  return (
    <>
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);
