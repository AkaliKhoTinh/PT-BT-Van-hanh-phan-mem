import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
