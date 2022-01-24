import { StyledDetailsNav } from './DetailsNav.styled';
import { NavLink, useLocation } from 'react-router-dom';

const DetailsNav = ({ setCurrentDetails }) => {
  return (
    <StyledDetailsNav>
      <ul>
        <li>
          <NavLink
            to='overview'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setCurrentDetails('overview')}
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
