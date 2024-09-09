import React from "react";
import { useState } from "react";

const Tutorial = () => {
  let stateValue = {
    count: 0,
    name: "Redux Tutorial",
    age: "1 Day",
  };

  let [state, setState] = useState(stateValue);

  const increment = () => {
    // update the state object by mutating the state object
    // ‍⁡⁢⁣⁢𝗕𝗔𝗗 𝗣𝗥𝗔𝗖𝗧𝗜𝗖𝗘⁡

    // state.name = "New Name for Redux Tutorial";

    // console.log(state);

    // CREATE A NEW OBJECT AND UPDATE THE STATE VARIABLE
    // ⁡⁣⁢⁣GOOD PRACTICE⁡
    state = { ...state, name: "New Name for Redux" };
    // console.log(state);

    setState(state);
  };

  return (
    <>
      <h3>{state.name}</h3>
      <button onClick={increment}>Click Me</button>
    </>
  );
};

export default Tutorial;
