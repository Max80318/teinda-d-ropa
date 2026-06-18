// src/components/Header.jsx
import React from 'react';
import Nav from './Nav';
import '../App.css';

const Header = ({ cartCount, onCartClick, onHomeClick, onKidsClick, onTeensClick }) => {
  return (
    <header className="header">
      <div className="logo-container" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
        <img 
          src="https://i.postimg.cc/7P50QpFh/logo-(2).png" 
          alt="Logo tienda" 
          className="logo"
        />
        <div>
          <h1>ModaKids</h1>
          <p className="slogan">Estilo y comodidad para ellos</p>
        </div>
      </div>
      <Nav 
        cartCount={cartCount} 
        onCartClick={onCartClick}
        onHomeClick={onHomeClick}
        onKidsClick={onKidsClick}
        onTeensClick={onTeensClick}
      />
    </header>
  );
};

export default Header;