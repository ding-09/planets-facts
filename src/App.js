import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyle';
import planetsData from './data.json';
import Header from './components/Header/Header';
import bgImg from './assets/background-stars.svg';

function App() {
  // json data for planets
  const [planets, setPlanets] = useState(planetsData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Header planets={planets} />
      </main>
    </ThemeProvider>
  );
}

export default App;
