import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }
    :root {
        font-family: var(--primary-family);
        line-height: 1.5;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --primary-family: "Poppins", sans-serif;
    }

    #root {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
    }

    body {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    li {
        list-style-type: none;
    }
    
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
    }

    table {
        margin: 0;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
`;