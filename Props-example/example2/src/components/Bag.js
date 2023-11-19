import React from "react";

function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20x"
    }

    return (
        <div style={bag}>
            {props.children}
        </div>


    )
}

export default Bag