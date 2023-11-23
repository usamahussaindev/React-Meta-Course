import React, { useState } from 'react';
import Heading from './Heading';

function App() {

  const [word, setWord] = React.useState("Hello");
  console.log(React.useState("Hello"));
  //Lifting state up is coding your app so that the state from the child component is moved to the parent component and the child component simply receives it via props.      


  function handleClick() {
    setWord('Drink hre')
  }
  return (
    <div>
      <Heading message={word + "at Litter Lemon"} />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default App;
