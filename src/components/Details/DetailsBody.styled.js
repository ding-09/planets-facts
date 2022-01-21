import styled from 'styled-components';
import { ReactComponent as SourceIcon } from '../../icons/icon-source.svg';

export const StyledDetailsBody = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 2.4rem;
  .body-content {
    margin-bottom: 3rem;
    h2 {
      text-transform: uppercase;
      font-size: 4rem;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.1rem;
      line-height: 2.2rem;
      filter: brightness(0.8);
    }
  }
  .source {
    font-size: 1.2rem;
    filter: brightness(0.6);
  }
`;
