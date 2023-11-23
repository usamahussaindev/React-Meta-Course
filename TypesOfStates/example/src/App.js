import React, { useState } from 'react';
import './App.css';

function App() {

  const [word, setWord] = useState("Hello friends");

  return (
    <div>
      <h1>A State Value: {word}</h1>
    </div>
  );
};

export default App;
