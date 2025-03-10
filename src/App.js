import Navbar from './components/NavBar.js';
import Body from './components/Body.js';
import Capability from './components/Capability.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Footer from './components/Footer.js'
import AI from './components/AI.js'
import Software from './components/Software.js'

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
        <Route path="/software-development" element={<Software />} />
        <Route path="/ai-research" element={<AI />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </Router >
  )
}