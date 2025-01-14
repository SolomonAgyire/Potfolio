//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { DisasterProject } from './pages/DisasterProject';
import { Experience } from './pages/Experience';
import { EdgeAIProject } from './pages/EdgeAIProject';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/edge-ai-project" element={<EdgeAIProject />} />
            <Route path="/disaster-project" element={<DisasterProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;