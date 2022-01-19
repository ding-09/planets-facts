import { StyledNavItem } from './NavItem.styled';
import { Link } from 'react-router-dom';

const NavItem = ({ planet }) => {
  return (
    <StyledNavItem color={planet.name.toLowerCase()}>
      <Link to={planet.name.toLowerCase()}>{planet.name}</Link>
    </StyledNavItem>
  );
};

export default NavItem;
