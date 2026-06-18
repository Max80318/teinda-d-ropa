// src/components/KidsSection.jsx
import React from 'react';
import { kidsProducts } from '../data/kidsProducts';
import ProductCard from './ProductCard';
import '../App.css';

const KidsSection = ({ onAddToCart }) => { 
  return (
    <section className="section" id="kids-section">
      <h2>Ropa para Niños</h2>
      <div className="product-grid">
        {kidsProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default KidsSection;