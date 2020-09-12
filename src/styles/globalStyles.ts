import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    body {
        background: ${({ theme }) => theme.colors.mainBackground};
        color: ${({ theme }) => theme.colors.primaryFontColor};
        font-family: ${({ theme }) => theme.fontFamily};
    }
`;
