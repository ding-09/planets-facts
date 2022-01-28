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
    <StyledNavItem color={planet.name.toLowerCase()}>
      <NavLink
        className={({ isActive }) => {
          if (planet.name === currentPlanet) {
            isActive = true;
          } else {
            isActive = false;
          }
          return isActive ? 'active-link' : ''
        }}
        to='/'
        onClick={() => {
          currentScreen < 768 ? setShowMenu(false) : setShowMenu(true);
          setCurrentPlanet(planet.name);
          setCurrentDetails('overview');
        }}
      >
        {/* {activeDisplay && <span className='active-border'></span>} */}
        {planet.name}
      </NavLink>
    </StyledNavItem>
  );
};

export default NavItem;
