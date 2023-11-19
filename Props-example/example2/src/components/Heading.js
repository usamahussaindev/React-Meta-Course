// ParentComponent.js
import React from 'react';

const Heading = (props) => {
    return (
        <div>
            <h2>Parent Component</h2>
            {/* Render the children passed to this component */}
            {props.children}
        </div>
    );
};

export default Heading;
