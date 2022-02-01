import { StyledNavItem } from './NavItem.styled';
import { NavLink } from 'react-router-dom';

const NavItem = ({
  planet,
  currentPlanet,
  currentScreen,
  setShowMenu,
  setCurrentPlanet,
  setCurrentDetails,
}) => {
  return (
    // pass planet's color as prop to the NavItem styled component
    <StyledNavItem color={planet.name.toLowerCase()}>
      <NavLink
        className={({ isActive }) => {
          if (planet.name === currentPlanet) {
            isActive = true;
          } else {
            isActive = false;
          }
          return isActive ? 'active-link' : '';
        }}
        to='/'
        onClick={() => {
          currentScreen < 768 ? setShowMenu(false) : setShowMenu(true);
          setCurrentPlanet(planet.name);
          setCurrentDetails('overview');
        }}
      >
        {planet.name}
      </NavLink>
    </StyledNavItem>
  );
};

export default NavItem;
