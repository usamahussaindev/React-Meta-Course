import React from 'react';
import Child from './Child';

function App() {
    const date = new Date()

    return (
        <div >
            <Child message={date.toLocaleTimeString()} />
            <h1> Insert the Child Component here.</h1>
        </div>
    );
}

export default App;