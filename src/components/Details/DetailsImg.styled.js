import styled from 'styled-components';

export const StyledDetailsImg = styled.figure`
  margin: 6rem auto;
  text-align: center;
  img {
    max-width: 55%;
    @media (min-width: 768px) {
      max-width: 60%;
    }
  }
`;
