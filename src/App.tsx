import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';

import Input from './components/Input/Input';

function App() {
  const [count, setCount] = useState(0);

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setError(e.target.value === '' ? 'Campo obrigatório' : '');
    };

  return (
    <>
      <Header />


        <div style={{ padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
          <h2>Meu Input</h2>
          <Input
            label="Digite algo:"
            placeholder="Exemplo de input..."
            value={inputValue}
            onChange={handleChange}
            error={error}
          />
        </div>



      <div className="container">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
