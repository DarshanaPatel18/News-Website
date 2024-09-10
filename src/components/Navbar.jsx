import React from 'react';
import '../Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">NewsPortal</h1>
        <ul className="navbar-links">
          <li><a href="#news">News</a></li>
          <li><a href="#highlighted">Top News</a></li>
          <li><a href="#share-story">Share Your Story</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
