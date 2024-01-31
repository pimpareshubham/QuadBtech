import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg nb">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">QuadBtech</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
                <Link className="nav-link fw-bold" to="/" onClick={() => handleLinkClick('Home')}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
