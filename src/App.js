import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import planetsData from './data.json';
import Header from './components/Header/Header';
import PlanetDetails from './components/Details/PlanetDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <main>
          <Header planets={planetsData} />
        </main>
        <Routes>
          <Route
            path='/:planet'
            element={<PlanetDetails planetsData={planetsData} />}
          >
            <Route
              path=':details'
              element={<PlanetDetails planetsData={planetsData} />}
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
