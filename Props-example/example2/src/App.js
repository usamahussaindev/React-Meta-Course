function App() {


    function handleClick() {
        console.log("clicked")
    }

    return (
        <div className="App">
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default App;