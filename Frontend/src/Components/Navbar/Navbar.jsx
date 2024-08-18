import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={assets.logo} id="logo" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === 'home' ? 'active' : ''}`}
                to="/"
                onClick={() => setMenu('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === 'categories' ? 'active' : ''}`}
                to="/categories"
                onClick={() => setMenu('categories')}
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === 'awareness' ? 'active' : ''}`}
                to="/awareness"
                onClick={() => setMenu('awareness')}
              >
                Awareness
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === 'contact-us' ? 'active' : ''}`}
                to="/contact-us"
                onClick={() => setMenu('contact-us')}
              >
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === 'about-us' ? 'active' : ''}`}
                to="/about-us"
                onClick={() => setMenu('about-us')}
              >
                About us
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center navbar-right">
            <img src={assets.search_icon} alt="Search Icon" />
            <div className="navbar-searchicon position-relative ms-3">
              <img src={assets.bag_icon} alt="Bag Icon" />
              <div className="dot"></div>
            </div>
            <Link to="/Register">
              <button className="btn btn-outline-success ms-3">Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
