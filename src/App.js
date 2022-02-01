import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import planetsData from './data.json';
import { StyledMain } from './components/Main.styled'
import Header from './components/Header/Header';
import PlanetDetails from './components/Details/PlanetDetails';

function App() {
  // default states for landing page
  const [currentPlanet, setCurrentPlanet] = useState('mercury');
  const [currentDetails, setCurrentDetails] = useState('overview');
  const [currentScreen, setCurrentScreen] = useState(0);

  // set current screen width 
  const handleResize = (e) => {
    const width = e.target.innerWidth;
    setCurrentScreen(width);
  };

  useEffect(() => {
    // add event listener to observe current window size
    window.addEventListener('resize', handleResize);

    // clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledMain>
          <Header
            planets={planetsData}
            currentScreen={currentScreen}
            currentPlanet={currentPlanet}
            setCurrentPlanet={setCurrentPlanet}
            setCurrentDetails={setCurrentDetails}
          />
          <PlanetDetails
            planetsData={planetsData}
            currentScreen={currentScreen}
            currentPlanet={currentPlanet}
            currentDetails={currentDetails}
            setCurrentDetails={setCurrentDetails}
          />
        </StyledMain>
      </Router>
    </ThemeProvider>
  );
}

export default App;
