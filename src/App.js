import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { About } from './components/about';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import './App.css';

function App() {
  return (
    <Router>

      <nav className="navbar">
        <div className="navbar-brand">Ley.</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <footer className="footer">
        © 2024 Ley. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
