// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';

const featuredProducts = [
  {
    id: 1,
    name: "Camiseta de algodón blanca",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300"
  },
  {
    id: 2,
    name: "Pantalón vaquero niños",
    image: "https://images.unsplash.com/photo-1605518215584-5ba74df5dfd8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Top cruzado cuello halter",
    image: "https://images.unsplash.com/photo-1740600730660-e7fd080ff2a7?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 13,
    name: "Chaqueta bomber",
    image: "https://images.unsplash.com/photo-1624548140129-74786c5f1279?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Vestido estampado",
    image: "https://plus.unsplash.com/premium_photo-1673384389967-e31ea744f3eb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section">
      <h2>Productos Destacados</h2>
      <div className="carousel-container">
        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {featuredProducts.map((product) => (
            <div key={product.id} className="carousel-item">
              <img src={product.image} alt={product.name} className="carousel-image" />
              <p className="carousel-name">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;