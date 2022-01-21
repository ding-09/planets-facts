import styled from 'styled-components';

export const StyledDetailsNav = styled.nav`

    ul {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
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
        border-bottom: 2px solid orange;
    }
`;
