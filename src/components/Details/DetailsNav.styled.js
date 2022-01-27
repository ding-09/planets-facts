import styled from 'styled-components';

export const StyledDetailsNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding: 0 2.4rem;
  }
  a {
    display: block;
    padding: 2rem 0 1.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
  .active-link {
    border-bottom: 3px solid ${(props) => props.theme.planetColors[props.color]};
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    ul {
      flex: 1;
      border-bottom: none;
      flex-direction: column;
      gap: 2rem;
      padding-left: 4rem;
    }
    a {
      cursor: pointer;
      padding: 1rem 2rem;
      border: 1px solid rgba(210, 210, 210, 0.2);
      box-shadow: 0 0 0 1px rgba(210, 210, 210, 0.1);
      span {
        padding-right: 1rem;
        display: inline-block;
        filter: brightness(0.8);
      }
    }
    .active-link {
      border: none;
      background-color: ${(props) => props.theme.planetColors[props.color]};
    }
  }
`;
