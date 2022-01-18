import styled from 'styled-components';
import ChevronIcon from '../../assets/icon-chevron.svg';

export const StyledNavItem = styled.li`
  padding: 2rem 0 2rem 4rem;
  list-style-type: none;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  line-height: 2.5rem;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.secondaryColors.darkGray};
  }

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.planetColors[props.color]};
    position: absolute;
    left: 0;
  }

  &:after {
    content: url(${ChevronIcon});
    position: absolute;
    right: 0;
  }
`;
