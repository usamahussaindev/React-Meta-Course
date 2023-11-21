import React from 'react';
import Dog from './components/example2.1/Dog';
import Puppy from './components/example2.1/Puppy';
import Bowl from './components/example2.1/Bowl';
import Promo from './components/Promo';

function App() {


    return (
        <div >
            <Promo />
            <Dog />
            <Bowl />
            <Puppy />
        </div>
    );
}

export default App;