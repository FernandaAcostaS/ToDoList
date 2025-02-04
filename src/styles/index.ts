// src/styles/index.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --gray-800: #1E1E1E;
  }

  /* body {
    margin: 0;
    padding-top: 200px; 
    min-width: 320px;
    min-height: 100vh;
    background-color: var(--gray-800);
    color: rgba(255, 255, 255, 0.87);
    display: flex;
    justify-content: center; 
  } */

  body {
    margin: 0;
    padding-top: 200px; 
    background-color: var(--gray-800);
    display: flex;
    flex-direction: column;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* Igual ao header */
    max-width: 1200px; /* Consistente com o header */
    margin: 0 auto;
    padding: 0 1rem;
    gap: 1rem;
  }


  /* Configurações responsivas */
  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr); /* Dois itens lado a lado */
    }
  }

  @media (min-width: 1024px) {
    .container {
      grid-template-columns: repeat(3, 1fr); /* Três itens lado a lado */
    }
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: #1a1a1a;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;

export default GlobalStyle;
