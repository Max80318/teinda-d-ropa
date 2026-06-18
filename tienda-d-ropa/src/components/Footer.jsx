// src/components/Footer.jsx
import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>ModaKids</h3>
          <p>Tienda de ropa para niños y adolescentes</p>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>📧 info@modakids.com</p>
          <p>📞 +502 4561 7895</p>
        </div>
        <div>
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ModaKids. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;