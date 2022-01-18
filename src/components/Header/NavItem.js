import { StyledNavItem } from './NavItem.styled';

const NavItem = ({ planet }) => {
  return (
    <StyledNavItem color={planet.name.toLowerCase()}>
      <a href='#'>{planet.name}</a>
    </StyledNavItem>
  );
};

export default NavItem;
