import React, { useState } from 'react';

function InputComponents() {
    const [inputText, setText] = useState('hello');
    // here inputText  and settext two values taken and hello world is set as default state
    function handleChange(e) {
        setText(e.target.value);
    }
    //target.value to handle change dynamically

    return (
        <>
            <input value={inputText} onChange={handleChange} />

            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </>
    );
}//input taken from user and store in inputText and onchange to manipulate value to new value   and shown to user and onlick arrow function to reset vakue to default 

export default InputComponents;
