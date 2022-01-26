import { StyledHeader } from './Header.styled';
import { ReactComponent as HamburgerIcon } from '../../icons/icon-hamburger.svg';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavItem from './NavItem';

const Header = ({ planets, setCurrentPlanet, setCurrentDetails }) => {
  // state for menu
  const [showMenu, setShowMenu] = useState(false);

  // toggle menu on click of hamburger icon
  const toggleMenu = () => {
    // display menu (set showMenu to true)
    setShowMenu(!showMenu);
  };

  // permanently display nav menu on screens >= 768px
  const handleResize = (e) => {
    const width = e.target.innerWidth;
    width >= 768 ? setShowMenu(true) : setShowMenu(false);
  };

  useEffect(() => {
    // add event listener to observe current window size
    window.addEventListener('resize', handleResize);

    // clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledHeader>
      <section className='title-container'>
        <h1>The Planets</h1>
        <HamburgerIcon
          onClick={toggleMenu}
          style={{ fill: showMenu ? '#979797' : '#fff' }}
        />
      </section>
      {showMenu && (
        <section className='nav-container'>
          <nav>
            <ul>
              {planets.map((planet) => (
                <NavItem
                  planet={planet}
                  key={uuidv4()}
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
