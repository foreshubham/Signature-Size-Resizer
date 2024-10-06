// src/App.js
import React from 'react';
import './App.css';
import ImageResizer from './Component/ImageResizer';
import Navbar from './Component/Navbar';
import Features from './Component/Features';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ImageResizer />
      </header>
      <Features/>

    </div>
  );
}

export default App;
