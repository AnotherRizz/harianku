import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Welcome from './pages/Welcome'
import Home from './pages/Home';
import Quran from './pages/Quran';
import DetailSurah from './pages/DetailSurah';
import ListDoa from './pages/ListDoa';
import AsmaulHusna from './pages/AsmaulHusna';



function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/doa" element={<ListDoa/>} />
      <Route path="/asmaulhusna" element={<AsmaulHusna/>} />
      <Route path="/quran/:nomor" element={<DetailSurah/>} />
   
    </Routes>
  </Router>
  
  )
}

export default App
