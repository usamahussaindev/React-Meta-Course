import React from "react";
import avatar from './avatar.png';

function Logo(props) {
    const userPic = <img src={avatar} />;
    return userPic;

}


function App() {
    return (
        <div><hi>hello world</hi>
            <Logo />
        </div>
    );
}

export default App;

