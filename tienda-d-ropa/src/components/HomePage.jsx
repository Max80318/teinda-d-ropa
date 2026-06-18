// src/components/HomePage.jsx
import React from 'react';
import Carousel from './Carousel';
import { kidsProducts } from '../data/kidsProducts';
import { teensProducts } from '../data/teensProducts';
import ProductCard from './ProductCard';
import '../App.css';

const HomePage = ({ onAddToCart, onKidsClick, onTeensClick }) => {
  // Tomamos los primeros 3 productos de cada categoría
  const featuredKids = kidsProducts.slice(0, 3);
  const featuredTeens = teensProducts.slice(0, 3);

  return (
    <div className="home-page">
      {/* Carrusel */}
      <Carousel />

      {/* Descripción de la página */}
      <section className="home-description">
        <h2>Bienvenido a ModaKids</h2>
        <p>
          La mejor tienda de ropa para niños y adolescentes. 
          Encuentra estilo, comodidad y calidad a los mejores precios.
          ¡Explora nuestras colecciones y viste a los más pequeños con moda!
        </p>
        <img src="https://i.postimg.cc/7P50QpFh/logo-(2).png"/>
      </section>

      {/* Destacados Niños (con 5% descuento) */}
      <section className="section">
        <h2>Destacados para Niños</h2>
        <p className="discount-badge">¡5% de descuento en estos productos!</p>
        <div className="product-grid">
          {featuredKids.map(product => (
            <ProductCard 
              key={product.id} 
              product={{...product, price: product.price * 0.95}} // Aplica descuento
              onAddToCart={onAddToCart}
              isDiscounted={true}
            />
          ))}
        </div>
        <button className="btn-see-all" onClick={onKidsClick}>
          Ver toda la colección de niños
        </button>
      </section>

      {/* Destacados Adolescentes (con 5% descuento) */}
      <section className="section">
        <h2>Destacados para Adolescentes</h2>
        <p className="discount-badge">¡5% de descuento en estos productos!</p>
        <div className="product-grid">
          {featuredTeens.map(product => (
            <ProductCard 
              key={product.id} 
              product={{...product, price: product.price * 0.95}}
              onAddToCart={onAddToCart}
              isDiscounted={true}
            />
          ))}
        </div>
        <button className="btn-see-all" onClick={onTeensClick}>
          Ver toda la colección de adolescentes
        </button>
      </section>
    </div>
  );
};

export default HomePage;