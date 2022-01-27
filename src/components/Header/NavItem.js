import { StyledNavItem } from './NavItem.styled';
import { Link } from 'react-router-dom';

const NavItem = ({
  planet,
  currentScreen,
  setShowMenu,
  setCurrentPlanet,
  setCurrentDetails,
}) => {
  return (
    <StyledNavItem color={planet.name.toLowerCase()}>
      <Link
        to='/'
        onClick={() => {
          currentScreen < 768 ? setShowMenu(false) : setShowMenu(true);
          setCurrentPlanet(planet.name);
          setCurrentDetails('overview');
        }}
      >
        {planet.name}
      </Link>
    </StyledNavItem>
  );
};

export default NavItem;
