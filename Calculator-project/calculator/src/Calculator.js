// Import React and the CSS file
import React, { useState } from 'react';
import './index.css';

// ... (rest of your component code)

const Calculator = () => {
    const [input, setInput] = useState('');
    const [total, setTotal] = useState(0);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleOperation = (operator) => {
        // Handle potential errors (e.g., division by zero)
        if (operator === '/' && parseFloat(input) === 0) {
            alert('Cannot divide by zero!');
            return;
        }

        switch (operator) {
            case '+':
                setTotal(total + parseFloat(input));
                break;
            case '-':
                setTotal(total - parseFloat(input));
                break;
            case '*':
                setTotal(total * parseFloat(input));
                break;
            case '/':
                setTotal(total / parseFloat(input));
                break;
            default:
                break;
        }

        setInput('');
    };

    const handleResultReset = () => {
        setTotal(0);
        setInput('');
    };

    const handleInputReset = () => {
        setInput('');
    };

    return (
        <div>
            <input
                type="text" // Change to "text" if you want to allow decimal numbers
                value={input}
                onChange={handleInputChange}
                placeholder="Enter a number"
            />
            <br />

            <button onClick={() => handleOperation('+')}>Addition (+)</button>
            <button onClick={() => handleOperation('-')}>Subtraction (-)</button>
            <button onClick={() => handleOperation('*')}>Multiplication (*)</button>
            <button onClick={() => handleOperation('/')}>Division (/)</button>
            <br />

            <button onClick={handleResultReset}>Result Reset</button>
            <button onClick={handleInputReset}>Input Reset</button>
            <br />

            <p>Total: {total}</p>
        </div>
    );
};

export default Calculator;
