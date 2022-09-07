
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box ;
}

body {
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
}

.root {
    width: 100% ;
}
`


export default GlobalStyle;