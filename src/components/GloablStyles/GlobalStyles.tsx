import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --white: #fff;
    --black: #000;
    --green: #4EE1A0;
    --primary-black: #151515;
    --secondary-black: #242424;
    --gray: #d9d9d9;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background-color: transparent;
}
button {
    border: none;
    background-color: transparent;
    font-family: inherit;
}

`;
