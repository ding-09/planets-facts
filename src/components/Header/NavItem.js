import { StyledNavItem } from './NavItem.styled';

const NavItem = ({ planet }) => {
  return (
    <StyledNavItem color={planet.name.toLowerCase()}>
      {planet.name}
    </StyledNavItem>
  );
};

export default NavItem;
