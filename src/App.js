// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './App.css';
import ImageResizer from './Component/ImageResizer';
import NewNavbar from './Component/NewNavbar'; 
import Features from './Component/Features';

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <div className="App">
        <header className="App-header">
          <NewNavbar />
          <ImageResizer />
        </header>
        <Features />
      </div>
    </Router>
  );
}

export default App;
