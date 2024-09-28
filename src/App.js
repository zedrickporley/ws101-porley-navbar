import './App.css';

import {Navbar,Nav,Container,} from 'react-bootstrap';
// import {BrowserRouter,RouterProvider,} from "react-router-dom";
import { About } from './components/about';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Ley.</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
