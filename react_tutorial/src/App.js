import "./App.css";
import ContextComponent from "./components/contextComp";
// import ThemeTypeContext from "./context/theme.js";
// import { useState } from "react";
import { ThemeContextProvider } from "./context/theme.js";
import Container from "./components/body.js";
import Todo from "./TodoApp/Todo.js";
import Tutorial from "./tutorial/Tutorial.js";

function App() {
  // const [isLight, setIsLight] = useState(true);
  return (
    <>
      {/* <ThemeTypeContext.Provider value={[isLight, setIsLight]}>
        <ContextComponent />
      </ThemeTypeContext.Provider> */}

      {/* <ThemeContextProvider>
        <ContextComponent />
        <Container />
      </ThemeContextProvider> */}
      {/* <div
        style={{
          border: "1px solid black",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#202A44",
        }}
      >
        <Todo />
      </div> */}
      <Tutorial />
    </>
  );
}

export default App;
