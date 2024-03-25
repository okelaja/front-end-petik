import React from 'react';
import '../Navbar.css'; 
function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="" className="navbar-logo">
          Toko Online
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/product" className="nav-links">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
