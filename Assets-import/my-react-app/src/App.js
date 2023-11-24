import Neno from './assets/neno.svg'; // Make sure to replace "your_image_filename.jpg" with the actual filename of your image


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <img src={Neno} alt="Neno" />
        {/* Other components or content */}
      </header>
    </div>
  );
}

export default App;
