import { StyledDetailsNav } from './DetailsNav.styled';
import { NavLink } from 'react-router-dom';

const DetailsNav = ({ currentScreen, currentPlanet, setCurrentDetails }) => {
  return (
    // pass current planet's color as a prop to the styled component
    <StyledDetailsNav color={currentPlanet}>
      <ul>
        <li>
          <NavLink
            to='/'
            onClick={() => setCurrentDetails('overview')}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            {currentScreen >= 768 && <span>01</span>} Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to='structure'
            onClick={() => setCurrentDetails('structure')}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <span>02</span>
            {currentScreen >= 1024 && 'Internal '}
            Structure
          </NavLink>
        </li>
        <li>
          <NavLink
            to='surface'
            onClick={() => setCurrentDetails('surface')}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <span>03</span>
            Surface
            {currentScreen >= 1024 && ' Geology '}
          </NavLink>
        </li>
      </ul>
    </StyledDetailsNav>
  );
};

export default DetailsNav;
