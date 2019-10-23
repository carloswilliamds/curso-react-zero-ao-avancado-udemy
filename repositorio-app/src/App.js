import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import GlobalStyle from './global'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Routes />
    </>
  );
}

export default App;
