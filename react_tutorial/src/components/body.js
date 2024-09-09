import React from "react";
import { useTheme } from "../context/theme.js";

const Container = () => {
  const [isLight] = useTheme();
  return (
    <div
      style={{
        backgroundColor: isLight ? "white" : "black",
        color: isLight ? "black" : "white",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <p>
        This is the something which we want to change from last few years but
        couldn't because never really try to change it
      </p>
    </div>
  );
};

export default Container;
