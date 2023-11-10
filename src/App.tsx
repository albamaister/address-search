import Theme from './utils/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./utils/styles/globalStyles";
import Location from "./components/organisms/Location";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Location/>
    </ThemeProvider>
  );
}

export default App;
