import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AnimalPage from './components/AnimalPage';
import LoginPage from './components/LoginPage';
import SignPage from './components/SignPage';
import PageNotFound from './components/404Page';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/animals" element={<AnimalPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path='/signup' element={<SignPage />}/>
        <Route path="/booking" element={<BookingPage />}/>
        {/* 404 Paths */}
        <Route path ='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
