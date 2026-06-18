// src/components/TeensSection.jsx
import React from 'react';
import { teensProducts } from '../data/teensProducts';
import ProductCard from './ProductCard';
import '../App.css';

const TeensSection = ({ onAddToCart }) => {  // ← Recibir el prop
  return (
    <section className="section" id="teens-section">
      <h2>Ropa para Adolescentes</h2>
      <div className="product-grid">
        {teensProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}   // ← Pasar el prop
          />
        ))}
      </div>
    </section>
  );
};

export default TeensSection;