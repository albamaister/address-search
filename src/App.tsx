import Theme from '../utils/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../utils/styles/globalStyles";
import Location from "./components/organisms/Location";
import Modal from './components/organisms/Modal';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Location/>
      <Modal/>
    </ThemeProvider>
  );
}

export default App;
