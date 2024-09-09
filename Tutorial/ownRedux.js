// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "WITHDRAW": {
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    }
    case "CHECKBALANCE": {
      return {
        ...state,
        balance: state.balance,
      };
    }
    default:
      return state;
  }
};

// initial state
const initialState = {
  name: "Ravi Raushan",
  balance: 5000,
  accountType: "Saving",
  bankName: "Ravi Trust",
};

// create state
let state = initialState;

// create action
const depositAction = { type: "DEPOSIT", payload: 12000 };
const withdrawAction = { type: "WITHDRAW", payload: 5000 };
const checkBalanceAction = { type: "CHECKBALANCE" };

let listeners = [];

// create own store
const MyStore = () => {
  const store = {
    getState: () => {
      return state;
    },
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
      return state;
    },
    subscribe: (listener) => {
      listeners.push(listener);
      const unSubscribe = () => {
        const listenerIndex = listeners.findIndex(
          (existingListener) => existingListener === listener
        );

        // remove the passed listener from the list
        if (listenerIndex > -1) {
          listeners.splice(listenerIndex, 1);
        }
      };

      return unSubscribe;
    },
  };
  return store;
};

// Call own store
const store = MyStore();

// subscribe
const unSubscribe = store.subscribe(() =>
  console.log("Store updated: ", store.getState())
);

store.subscribe(() => console.log("Store updated: ", store.getState()));
// NOTE: Above both are different subscribers

// dispatch
console.log(store.getState());
store.dispatch(depositAction);
unSubscribe();
store.dispatch(withdrawAction);
store.dispatch(checkBalanceAction);

// console
// console.log(store);
// console.log(store.getState());
