import styled from 'styled-components';

export const StyledDetailsNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding: 0 2.4rem;
    @media (min-width: 768px) {
      flex: 1;
      border-bottom: none;
      flex-direction: column;
      gap: 2rem;
      padding-left: 4rem;
    }
  }
  a {
    display: block;
    padding: 2rem 0 1.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.2rem;
    @media (min-width: 768px) {
      cursor: pointer;
      padding: 1rem 2rem;
      border: 1px solid rgba(210, 210, 210, 0.2);
      box-shadow: 0 0 0 1px rgba(210, 210, 210, 0.1);
      span {
        padding-right: 1rem;
        display: inline-block;
        filter: brightness(0.8);
        display: none;
        @media (min-width: 768px) {
          display: inline;
        }
      }
    }
    @media (min-width: 1280px) {
      font-size: 1.2rem;
      &:hover {
        background-color: ${({ theme }) => theme.secondaryColors.darkGray};
      }
    }
  }
  .active-link {
    border-bottom: 3px solid ${(props) => props.theme.planetColors[props.color]};
    @media (min-width: 768px) {
      border: 1px solid rgba(210, 210, 210, 0);
      background-color: ${(props) => props.theme.planetColors[props.color]};
      &:focus {
        background-color: ${(props) => props.theme.planetColors[props.color]};
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1024px) {
    margin-left: 4rem;
  }
`;
