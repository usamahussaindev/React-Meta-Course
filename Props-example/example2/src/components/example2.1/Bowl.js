import React from "react";

const Bowl = ({ bowlShape, bowlStatus }) => {
    return (
        <div>
            <p>Bowl Shape: {bowlShape}</p>
            <p>Bowl Status: {bowlStatus}</p>
        </div>
    );
};

function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    );
}

export default Puppy;
