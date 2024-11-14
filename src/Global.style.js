import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        width: 100vw;
        height: 100vh;
        font-family: "Barlow", serif;
    }
`;

