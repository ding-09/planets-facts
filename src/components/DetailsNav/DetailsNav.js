import { StyledDetailsNav } from './DetailsNav.styled';

const DetailsNav = () => {
  return (
    <StyledDetailsNav>
      <ul>
        <li>
          <a href='#' className='active-link'>
            Overview
          </a>
        </li>
        <li>
          <a href='#'>Structure</a>
        </li>
        <li>
          <a href='#'>Surface</a>
        </li>
      </ul>
    </StyledDetailsNav>
  );
};

export default DetailsNav;
