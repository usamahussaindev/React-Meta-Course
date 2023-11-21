


function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <h1> Dark Mode is On</h1>
    const lightMode = <h1>Light Mode 1s is On</h1>


    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn == true) {
            console.log("Dark Mode is on")
        }
        else {
            console.log("Light mode is on")

        }
    }


    return (

        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>clickMe</button>
        </div>



    )
};

export default ModeToggler;