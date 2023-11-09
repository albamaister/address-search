import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils/styles/globalStyles";
import Theme from "../utils/styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div className="">
        <h1>Hola Airpals</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
