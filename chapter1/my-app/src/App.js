import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
    </header>
  );
}

function App() {
  return <Header />;
}

export default App;
