import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Welcome from './pages/Welcome'
import Home from './pages/Home';
import Quran from './pages/Quran';
import DetailSurah from './pages/DetailSurah';



function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/quran/:nomor" element={<DetailSurah/>} />
   
    </Routes>
  </Router>
  
  )
}

export default App
