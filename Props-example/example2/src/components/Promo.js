import React from 'react';

const data = {
    Usama: ' choose the better options ',
    Hussain: "Javascript | React | Vue | Node"
};

function PromoHeading(props) {
    return (
        <div>
            <h1>{props.Usama}</h1>
            <p>{props.Hussain}</p>
        </div>
    );
}

function Promo() {
    return (
        <div>
            <PromoHeading
                Usama={data.Usama}
                Hussain={data.Hussain}
            />
        </div>
    );
}

export default Promo;
