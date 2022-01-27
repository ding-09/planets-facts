import styled from 'styled-components';
import ChevronIcon from '../../icons/icon-chevron.svg';

export const StyledNavItem = styled.li`
  display: flex;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.secondaryColors.darkGray};
    @media (min-width: 768px) {
      border-bottom: none;
    }
  }
  a {
    flex: 1;
    padding: 2rem 0 2rem 4rem;
    position: relative;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    line-height: 2.5rem;
    @media (min-width: 768px) {
      padding: 0;
      font-size: 1.1rem;
      filter: brightness(0.8)
    }
    &:before {
      content: '';
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme.planetColors[props.color]};
      position: absolute;
      left: 0;
      @media (min-width: 768px) {
        content: none;
      }
    }
    &:after {
      content: url(${ChevronIcon});
      position: absolute;
      right: 0;
      @media (min-width: 768px) {
        content: none;
      }
    }
  }
`;
