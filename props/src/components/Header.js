import React from 'react';

function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>Usama Hussain {props.name},{props.color}</h1>
        </header>
    );
}

export default Header;
