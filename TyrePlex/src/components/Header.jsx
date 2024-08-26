import React, { useState } from 'react';
import Headerlogo from '../assets/Headerlogo.png';
import User from '../assets/user.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="header-main">
      <header className="header">
        <img src={Headerlogo} alt="Logo" />
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
          <span className="menu-icon"></span>
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className="car-tyres">
              <h1><a href="#">Car Tyres</a></h1>
              <ul className="submenu">
                <li><a href="#">MRF Tyres</a></li>
                {/* Other items */}
              </ul>
            </li>
            {/* Other list items */}
          </ul>
        </nav>
        <div className={`login ${isMenuOpen ? 'hidden' : ''}`}>
          <a href="#"><img src={User} alt="user" style={{ height: "80px", margin: "5px", position: "relative", top: "20px" }} />Login</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
