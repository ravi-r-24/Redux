import { createContext, useState, useContext } from "react";

// const theme = {
//   primaryColor: "red",
//   secondaryColor: "blue",
//   backgroundColor: "white",
//   textColor: "black",
//   fontFamily: "Arial, sans-serif",
//   borderRadius: "5px",
//   shadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
//   buttonColor: "white",
//   buttonBackgroundColor: "blue",
//   buttonHoverBackgroundColor: "darkblue",
//   buttonTextColor: "white",
// };

const ThemeTypeContext = createContext();

export default ThemeTypeContext;

export const ThemeContextProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(
    JSON.parse(localStorage.getItem("isLight"))
  );
  return (
    <ThemeTypeContext.Provider value={[isLight, setIsLight]}>
      {children}
    </ThemeTypeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeTypeContext);
};
