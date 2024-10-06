// src/Component/NewNavbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Make sure to import NavLink
import '../Component/newnavbar.css'
const NewNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <button>Hamburger</button>
        </div>
        <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
