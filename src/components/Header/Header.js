import { StyledHeader } from './Header.styled';
import { ReactComponent as HamburgerIcon } from '../../assets/icon-hamburger.svg';
import NavItem from './NavItem';

const Header = ({ planets }) => {
  return (
    <StyledHeader color={planets[0].name}>
      <section className='title-container'>
        <h1>The Planets</h1>
        <HamburgerIcon />
      </section>
      <section className='nav-container'>
        <nav>
          <ul>
            {planets.map((planet) => (
              <NavItem planet={planet}/>
            ))}
          </ul>
        </nav>
      </section>
    </StyledHeader>
  );
};

export default Header;
