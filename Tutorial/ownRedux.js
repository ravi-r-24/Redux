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

// create own store
const MyStore = () => {
  const store = {
    getState: () => {
      return state;
    },
    dispatch: (action) => {
      state = reducer(state, action);
      return state;
    },
    subscribe: () => {},
  };
  return store;
};

// Call own store
const store = MyStore();

// dispatch
console.log(store.getState());
store.dispatch(depositAction);
console.log(store.getState());
store.dispatch(withdrawAction);
console.log(store.getState());

// console
// console.log(store);
// console.log(store.getState());
