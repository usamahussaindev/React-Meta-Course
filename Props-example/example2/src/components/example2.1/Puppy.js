import React from "react";

const Puppy = ({ name, bowlShape, bowlStatus }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Bowl Shape: {bowlShape}</p>
            <p>Bowl Status: {bowlStatus}</p>
        </div>
    );
};

function Dog() {
    return (
        <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    );
}

export default Dog;
