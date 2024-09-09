import "./App.css";
import ContextComponent from "./components/contextComp";
// import ThemeTypeContext from "./context/theme.js";
// import { useState } from "react";
import { ThemeContextProvider } from "./context/theme.js";
import Container from "./components/body.js";

function App() {
  // const [isLight, setIsLight] = useState(true);
  return (
    <>
      {/* <ThemeTypeContext.Provider value={[isLight, setIsLight]}>
        <ContextComponent />
      </ThemeTypeContext.Provider> */}

      <ThemeContextProvider>
        <ContextComponent />
        <Container />
      </ThemeContextProvider>
    </>
  );
}

export default App;
