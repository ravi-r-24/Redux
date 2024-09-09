import React from "react";
// import ThemeTypeContext from "../context/theme.js";
// import { useContext } from "react";
import { useTheme } from "../context/theme.js";

const ContextComponent = () => {
  const [isLight, setIsLight] = useTheme();

  //   const [textColor, setTextColor] = useState(theme.primaryColor);

  // on button click hit this function
  //   const changeTextColor = () => {
  //     setTextColor("blue");
  //   };

  // const [isLight, setIsLight] = useContext(ThemeTypeContext);
  // console.log(isLight);

  return (
    <>
      <h1>This is Context Component</h1>

      {/* on click of the below button i want to make the primary color of them to blue */}
      <button
        style={{
          padding: "8px 20px 8px 20px",
          background: "transparent",
          border: "1px solid",
          borderRadius: "6px",
          cursor: "pointer",
          color: isLight ? "black" : "white",
          backgroundColor: isLight ? "white" : "black",
        }}
        onClick={() => {
          setIsLight(!isLight);
        }}
      >
        Blue
      </button>
    </>
  );
};

export default ContextComponent;
