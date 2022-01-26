import { StyledNavItem } from './NavItem.styled';
import { Link } from 'react-router-dom';

const NavItem = ({ planet, setShowMenu, setCurrentPlanet, setCurrentDetails }) => {
  return (
    <StyledNavItem color={planet.name.toLowerCase()}>
      <Link
        to='/'
        onClick={() => {
          setShowMenu(false);
          setCurrentPlanet(planet.name);
          setCurrentDetails('overview')
        }}
      >
        {planet.name}
      </Link>
    </StyledNavItem>
  );
};

export default NavItem;
