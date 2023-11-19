// App.js
import React from 'react';
import Heading from './components/Heading';

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      {/* Use ParentComponent and pass a child element */}
      <Heading>
        <p>This is a child paragraph.</p>
      </Heading>

      {/* Use ParentComponent and pass another child component */}

    </div>
  );
};

export default App;
