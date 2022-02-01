import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import planetsData from './data.json';
import { StyledMain } from './components/Main.styled';
import Header from './components/Header/Header';
import PlanetDetails from './components/Details/PlanetDetails';

function App() {
  // default states for landing page
  const [currentPlanet, setCurrentPlanet] = useState('mercury');
  const [currentDetails, setCurrentDetails] = useState('overview');
  const [currentScreen, setCurrentScreen] = useState(0);

  // state for observing whether or not user is on mobile
  const [onMobile, setOnMobile] = useState(false);

  // state for displaying menu
  const [showMenu, setShowMenu] = useState(false);

  // set current screen width
  const handleResize = (e) => {
    const width = e.target.innerWidth;
    setCurrentScreen(width);
    setShowMenu(false);
    width < 768 ? setOnMobile(true) : setOnMobile(false);
  };

  useEffect(() => {
    // add event listener to observe current window size
    window.addEventListener('resize', handleResize);

    // clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // detect whether user is on mobile or not on page load
  useEffect(() => {
    window.innerWidth < 768 ? setOnMobile(true) : setOnMobile(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledMain>
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            planets={planetsData}
            currentScreen={currentScreen}
            currentPlanet={currentPlanet}
            setCurrentPlanet={setCurrentPlanet}
            setCurrentDetails={setCurrentDetails}
          />
          {(!onMobile || (onMobile && !showMenu)) &&
          <PlanetDetails
            planetsData={planetsData}
            currentScreen={currentScreen}
            currentPlanet={currentPlanet}
            currentDetails={currentDetails}
            setCurrentDetails={setCurrentDetails}
          />}
        </StyledMain>
      </Router>
    </ThemeProvider>
  );
}

export default App;
