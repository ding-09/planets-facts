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
`;
