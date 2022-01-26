import { StyledDetailsNav } from './DetailsNav.styled';
import { NavLink } from 'react-router-dom';

const DetailsNav = ({ setCurrentDetails, currentPlanet }) => {
  return (
    <StyledDetailsNav color={currentPlanet}>
      <ul>
        <li>
          <NavLink
            to='/'
            onClick={() => setCurrentDetails('overview')}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to='structure'
            onClick={() => setCurrentDetails('structure')}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Structure
          </NavLink>
        </li>
        <li>
          <NavLink
            to='surface'
            onClick={() => setCurrentDetails('surface')}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Surface
          </NavLink>
        </li>
      </ul>
    </StyledDetailsNav>
  );
};

export default DetailsNav;
