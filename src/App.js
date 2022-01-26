import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import planetsData from './data.json';
import Header from './components/Header/Header';
import PlanetDetails from './components/Details/PlanetDetails';

function App() {
  // default states for landing page
  const [currentPlanet, setCurrentPlanet] = useState('mercury');
  const [currentDetails, setCurrentDetails] = useState('overview');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <main>
          <Header
            planets={planetsData}
            setCurrentPlanet={setCurrentPlanet}
            setCurrentDetails={setCurrentDetails}
          />
          <PlanetDetails
            planetsData={planetsData}
            currentPlanet={currentPlanet}
            currentDetails={currentDetails}
            setCurrentDetails={setCurrentDetails}
          />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
