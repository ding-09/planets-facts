import styled from 'styled-components';

export const StyledHeader = styled.header`
  .title-container {
    padding: 2rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.secondaryColors.darkGray};

    h1 {
      letter-spacing: -0.1rem;
      text-transform: uppercase;
      font-size: 2.8rem;
    }
  }

  .nav-container {
    margin: 2.5rem 2.4rem 6.5rem;
  }
`;
