import React from 'react';

function Heading(props) {
    const assideStyle = {
        color: props.color || 'blue', // default to black if color prop is not provided
        fontFamily: 'Arial, sans-serif', // customize the font family
        // Add more styles as needed
    };

    return (
        <aside
            style={assideStyle}
            className="Heading">
            <h1>Usama Hussain {props.name}</h1>

        </aside>
    );
}

export default Heading;
