import { StyledHeader } from './Header.styled';
import { ReactComponent as HamburgerIcon } from '../../icons/icon-hamburger.svg';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavItem from './NavItem';

const Header = ({ planets, currentPlanet, currentScreen, setCurrentPlanet, setCurrentDetails }) => {
  // state for menu toggle
  const [showMenu, setShowMenu] = useState(false);

  // toggle menu on click of hamburger icon
  const toggleMenu = () => {
    // open / close menu (set showMenu to opposite)
    setShowMenu(!showMenu);
  };


  return (
    <StyledHeader>
      <section className='title-container'>
        <h1>The Planets</h1>
        <HamburgerIcon
          onClick={toggleMenu}
          style={{ fill: showMenu ? '#979797' : '#fff' }}
        />
      </section>
      {/* show menu if showMenu is true OR if no longer on mobile */}
      {(showMenu || currentScreen >= 768) && (
        <section className='nav-container'>
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
