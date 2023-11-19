import React from 'react';
import Heading from './components/Heading';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Heading name="Software " color="Engineering" />
      {/* Other content goes here */}
      <Nav first=" Usama" second=" Hussain" third=" Chaudary" />
    </div>
  );
}

export default App;
