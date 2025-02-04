// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css'; // Importa o reset.css
import GlobalStyle from './styles/index'; // Importa o GlobalStyle
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle /> {/* Aplica os estilos globais */}
    <App />
  </StrictMode>,
);
