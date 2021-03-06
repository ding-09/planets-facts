import styled from 'styled-components';
import SourceIcon from '../../icons/icon-source.svg';

export const StyledDetailsBody = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 2.4rem;
  @media (min-width: 768px) {
    text-align: left;
    padding: 0 3rem;
  }
  @media (min-width: 1024px) {
    margin: 8rem 0 4rem 5rem;
  }
  .body-content {
    margin-bottom: 3rem;
    h2 {
      text-transform: uppercase;
      font-size: 4rem;
      margin-bottom: 3rem;
      @media (min-width: 768px) {
        font-size: 4.8rem;
        margin-bottom: 4.5rem;
      }
      @media (min-width: 1280px) {
        font-size: 8rem;
        margin-bottom: 6rem;
      }
    }
    p {
      font-size: 1.1rem;
      line-height: 2.2rem;
      filter: brightness(0.7);
      @media (min-width: 1024px) {
        font-size: 1.2rem;
      }
      @media (min-width: 1280px) {
        font-size: 1.4rem;
      }
    }
  }
  .source {
    font-size: 1.2rem;
    filter: brightness(0.6);
    a {
      position: relative;
      text-decoration: underline;
      &:after {
        content: url(${SourceIcon});
        position: absolute;
        color: #fff;
        top: 0;
        bottom: 0;
        transform: translate(50%, -30%);
      }
    }
  }
`;
