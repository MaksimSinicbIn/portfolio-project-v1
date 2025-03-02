import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
}

body {
    margin: 0;
    line-height: 1.2;
    font-family:'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.font};
    background-color: ${Theme.colors.primaryBg};

    min-width: 360px;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: ${Theme.colors.font}
}

ul li {
    list-style: none;
}

button {
    font-family:'DM Sans', sans-serif;
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${Theme.colors.font}
}

section {
    padding: 100px 0;
    background-color: ${Theme.colors.primaryBg};

    @media ${Theme.media.mobile} {
        padding: 80px 0;
    }
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
}

p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
}
`