import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyle';
import { BrowserRouter as Router} from 'react-router-dom';
import planetsData from './data.json';
import Header from './components/Header/Header';
import PlanetDetails from './components/Details/PlanetDetails';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState('mercury');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <main>
          <Header planets={planetsData} setCurrentPlanet={setCurrentPlanet} />
          <PlanetDetails
            planetsData={planetsData}
            currentPlanet={currentPlanet}
          />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
