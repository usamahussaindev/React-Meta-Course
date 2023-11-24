// src/App.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'; // Import the Contact component

function App() {
  // existing code...

  return (
    <div>
      {/* existing code... */}
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          {/* Add the new link for Contact */}
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* existing code... */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add the new route for Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
