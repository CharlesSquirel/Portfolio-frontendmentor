import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --white: #fff;
    --black: #000;
    --green: #4EE1A0;
    --primary-black: #151515;
    --secondary-black: #242424;
    --gray: #d9d9d9;
    --xl: 88px;
    --l: 48px;
    --m: 24px;
    --regular: 500;
    --bold: 700;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-size: 18px;
    font-weight: 500;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
a {
    color: inherit;
    text-decoration: none;
}
input {
    border: none;
    border-bottom: var(--gray);
    background-color: transparent;
    outline: 0;
    :focus {
        border-bottom: var(--green);
    }
}
button {
    border: none;
    background-color: transparent;
    font-family: inherit;
}

`;
