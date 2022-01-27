import styled from 'styled-components';

export const StyledHeader = styled.header`
  @media (min-width: 768px) {
    border-bottom: 1px solid ${({ theme }) => theme.secondaryColors.darkGray};
    box-shadow: 0 0px 1px 1px ${({ theme }) => theme.secondaryColors.darkGray};
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.5rem;
  }
  .title-container {
    padding: 2rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.secondaryColors.darkGray};
    box-shadow: 0 0px 1px 1px ${({ theme }) => theme.secondaryColors.darkGray};
    h1 {
      letter-spacing: -0.1rem;
      text-transform: uppercase;
      font-size: 2.8rem;
    }
    @media (min-width: 768px) {
      justify-content: center;
      padding: 3.5rem 0 3rem;
      border-bottom: none;
      box-shadow: none;
      svg {
        display: none;
      }
    }
    @media (min-width: 1280px) {
      flex: 45%;
      justify-content: flex-start;
    }
  }

  .nav-container {
    margin: 2.5rem 2.4rem 6.5rem;
    @media (min-width: 768px) {
      margin: 3rem 5rem 2.5rem;
      ul {
        display: flex;
        justify-content: space-between;
      }
    }
    @media (min-width: 1280px) {
      margin: 0;
      flex: 55%;
    }
  }
`;
