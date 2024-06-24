import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AnimalPage from './components/AnimalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/animals" element={<AnimalPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
