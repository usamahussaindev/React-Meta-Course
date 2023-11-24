import React, { useState } from 'react';

const Conditional = () => {
    // State to track the condition
    const [isToggleOn, setToggleOn] = useState(false);

    return (
        <div>
            <p>{isToggleOn ? 'The button is ON' : 'The button is OFF'}</p>

            {/* Button to toggle the isToggleOn state */}
            <button onClick={() => setToggleOn(!isToggleOn)}>
                Toggle Button
            </button>
        </div>
    );
};

export default Conditional;
