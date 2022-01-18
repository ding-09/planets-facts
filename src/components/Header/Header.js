import { StyledHeader } from './Header.styled';
import { ReactComponent as HamburgerIcon } from '../../assets/icon-hamburger.svg';
import NavItem from './NavItem';
import { useState } from 'react';

const Header = ({ planets }) => {
  // state for menu
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    // display menu (set showMenu to true)
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
      {showMenu && (
        <section className='nav-container'>
          <nav>
            <ul>
              {planets.map((planet) => (
                <NavItem planet={planet} />
              ))}
            </ul>
          </nav>
        </section>
      )}
    </StyledHeader>
  );
};

export default Header;
