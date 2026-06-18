// src/components/ProductCard.jsx
import React from 'react';
import '../App.css';

const ProductCard = ({ product, onAddToCart, isDiscounted }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">
        Q{product.price.toFixed(2)}
        {isDiscounted && <span className="discount-tag"> -5%</span>}
      </p>
      <button className="btn-buy" onClick={() => onAddToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;