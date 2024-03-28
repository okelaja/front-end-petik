import React from 'react';
import logo from "../Img/logo.png";
import './Header.css'; 
function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className='nav-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHLCUh-yP_jDgEVHEbb_JYh6btluy1QHa5ja_tOQk8uQ48eXLa88bmms5x1GXkPYklw&usqp=CAU" alt=""/>
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
