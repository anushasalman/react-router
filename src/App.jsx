import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Red } from './components/Red';
import { Blue } from './components/Blue';
import { Home } from './components/Home';

function App() {

  return (
    <>
      <div id="container">
        
        <div id="navbar">
          <Link to='/red'>
            <h4>Red</h4>
          </Link>
          <Link to='/blue'>
            <h4>Blue</h4>
          </Link>
          <Link to='/'>
            <h4>Home</h4>
          </Link>
          </div>
    
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
