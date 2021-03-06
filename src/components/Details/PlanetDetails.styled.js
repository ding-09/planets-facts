import styled from 'styled-components';

export const StyledPlanetDetails = styled.section`
  display: grid;
  grid-template-areas:
    'nav nav nav nav'
    'img img img img'
    'body body body body'
    'sub sub sub sub';
  nav {
    grid-area: nav;
  }
  figure {
    grid-area: img;
  }
  .details-body {
    grid-area: body;
  }
  .sub-details {
    grid-area: sub;
  }
  @media (min-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 15rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      'img img img img'
      'img img img img'
      'body body nav nav'
      'sub sub sub sub';
    figure {
      align-self: center;
    }
  }
  @media (min-width: 1024px) {
    padding: 0 8rem;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'img img body body'
      'img img body body'
      'img img nav nav'
      'sub sub sub sub';
    figure {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;
