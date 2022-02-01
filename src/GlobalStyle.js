import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: ${({ theme }) =>
          theme.primaryColors.bg} url('/assets/background-stars.svg') no-repeat;
        color: ${({ theme }) => theme.primaryColors.text};
        font-family: 'Spartan', sans-serif;
        font-size: 1.4rem;
        line-height: 2.5rem;
    }

    h1, h2 {
        font-family: 'Antonio', sans-serif
    }

    li {
        list-style-type: none;
    }
    
    a {
        font-weight: bold;
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
