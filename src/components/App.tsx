import React from 'react';
import logo from '../logo.svg';
import { useTranslation } from 'react-i18next'
import './App.css';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <h1>{t('locations')}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
