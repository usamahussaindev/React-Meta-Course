import React from 'react';
import Button from './Button';

function Main(props) {
  return <Header msg={props.msg} />;
  //Note that when the Header component 
  //is rendered from inside Main, it also receives the msg prop.
};

function Header(props) {
  return (
    <div style={{ border: "10px solid whitesmoke" }}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} />
    </div>
    //, the Header component’s function declaration has a return statement, 
    //which renders the Wrapper component with the msg prop passed to it.
  );
};

function Wrapper(props) {
  return (
    <div style={{ border: "10px solid lightgray" }}>
      <h2>Wrapper here</h2>
      <Button msg={props.msg} />
    </div>
    //rendering of the Button component, which also receives the msg attribute.
  );
};

function Button(props) {
  // the Button component’s function declaration is coded to receive the props object, 
  return (
    <div style={{ border: "20px solid orange" }}>
      <h3>This is the Button component</h3>
      <button onClick={() => alert(props.msg)}>Click me!</button>
    </div>
  );
};

function App() {
  return (
    <Main
      msg="I passed through the Header and the Wrapper and I reached the Button component"
    />
  );
};

export default App;