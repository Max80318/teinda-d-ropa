// src/components/Nav.jsx
import React from 'react';
import '../App.css';

const Nav = ({ cartCount, onCartClick, onHomeClick, onKidsClick, onTeensClick }) => {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li><a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Inicio</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); onKidsClick(); }}>Niños</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); onTeensClick(); }}>Adolescentes</a></li>
      </ul>
      <button className="cart-button" onClick={onCartClick}>
        🛒 Carrito
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </nav>
  );
};

export default Nav;