import Navbar from './components/NavBar.js';
import Body from './components/Body.js';
import Capability from './components/Capability.js';
import Contact from './components/Contact.js';
import About from './components/About.js';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/capability" element={<Capability />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router >
  )
}