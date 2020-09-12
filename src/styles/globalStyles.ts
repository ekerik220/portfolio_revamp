import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
