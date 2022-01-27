import styled from 'styled-components';

export const StyledSubDetails = styled.section`
  margin: 3rem 2.4rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-transform: uppercase;
  @media (min-width: 768px) {
    margin-top: 2rem;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    margin-top: 5rem;
    
  }
  .details-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(210, 210, 210, 0.2);
    box-shadow: 0 0 0 1px rgba(210, 210, 210, 0.1);
    padding: 1rem 2.4rem;
    @media (min-width: 768px) {
      flex-direction: column;
      justify-content: space-around;
      flex: 1;
      padding: 1.5rem;
      justify-content: space-around;
      align-items: flex-start;
    }
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
      @media(min-width: 768px) {
        font-size: 2.4rem;
        letter-spacing: -0.1rem;
      }
    }
  }
`;
