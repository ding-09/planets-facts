import { StyledHeader } from './Header.styled';
import { ReactComponent as HamburgerIcon } from '../../icons/icon-hamburger.svg';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavItem from './NavItem';

const Header = ({
  planets,
  currentPlanet,
  currentScreen,
  showMenu,
  setShowMenu,
  setCurrentPlanet,
  setCurrentDetails,
}) => {
  // toggle menu on click of hamburger icon
  const toggleMenu = () => {
    // open / close menu (set showMenu to opposite)
    setShowMenu(!showMenu);
  };

  // useEffect hook to persist menu if currentScreen >= 768
  useEffect(() => {
    window.innerWidth >= 768 ? setShowMenu(true) : setShowMenu(false);
  }, []);

  return (
    <StyledHeader>
      <section className='main-title'>
        <h1>The Planets</h1>
        <HamburgerIcon
          onClick={toggleMenu}
          style={{ fill: showMenu ? '#979797' : '#fff' }}
        />
      </section>
      {/* show menu if showMenu is true OR if no longer on mobile */}
      {(showMenu || currentScreen >= 768) && (
        <section className='main-nav'>
          <nav>
            <ul>
              {planets.map((planet) => (
                <NavItem
                  planet={planet}
                  currentPlanet={currentPlanet}
                  key={uuidv4()}
                  currentScreen={currentScreen}
                  setShowMenu={setShowMenu}
                  setCurrentPlanet={setCurrentPlanet}
                  setCurrentDetails={setCurrentDetails}
                />
              ))}
            </ul>
          </nav>
        </section>
      )}
    </StyledHeader>
  );
};

export default Header;
