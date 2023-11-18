import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import './App.css';

function App() {
  return (
    <div>
      <Header name="Software " color="Engineering" />
      {/* Other content goes here */}
      <Intro1 />
      <Promo />
      <Intro2 />
      <Intro3 />

      <Footer />
    </div>
  );
}

export default App;
