// function Btn() {
//     const clickHandler = () => console.log('clicked');

//     return (
//         <button onClick={clickHandler}>
//             Click Me
//         </button>
//     );
// }

// export default Btn;


function Btn() {
    const clickHandler = () => console.log('Mouse over');

    return (
        <button onMouseOver={clickHandler}>
            Click Me
        </button>
    );
}

export default Btn;
