import styled from 'styled-components';

export const StyledSubDetails = styled.section`
  margin: 3rem 2.4rem 4rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-transform: uppercase;
  .details-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(210, 210, 210, 0.2);
    box-shadow: 0 0 0 1px rgba(210, 210, 210, 0.1);
    padding: 1rem 2.4rem;
    p:first-child {
      font-weight: bold;
      font-size: 0.8rem;
      line-height: 1.6rem;
      letter-spacing: 0.1rem;
      filter: brightness(0.6);
    }
    p:last-child {
      font-family: 'Antonio', sans-serif;
      font-size: 2rem;
      letter-spacing: -0.075rem;
    }
  }
`;
