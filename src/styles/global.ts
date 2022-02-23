import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --primaryColor: rgb(38, 34, 97);
        --secondaryColor: rgb(238, 64, 54);
        --tertiaryColor: rgb(250, 175, 64);
        --fontColor: #FFFFFF;
    }

    * {
        font-weight: 500;
        font-family: 'Nunito',sans-serif;
    }

    body {
        background: var(--primaryColor);
    }
`