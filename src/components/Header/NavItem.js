import { StyledNavItem } from './NavItem.styled';
import { Link } from 'react-router-dom';

const NavItem = ({ planet, setShowMenu }) => {
  return (
    <StyledNavItem color={planet.name.toLowerCase()}>
      <Link to={`${planet.name}/overview`} onClick={() => setShowMenu(false)}>
        {planet.name}
      </Link>
    </StyledNavItem>
  );
};

export default NavItem;
