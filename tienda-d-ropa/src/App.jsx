// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import KidsSection from './components/KidsSection';
import TeensSection from './components/TeensSection';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage'; // NUEVO
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'kids', 'teens', 'cart'

  // Agregar producto al carrito
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  // Eliminar producto del carrito
  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Cambiar cantidad
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Vaciar carrito después de compra
  const handleCheckout = (formData) => {
    console.log('Compra confirmada', { formData, cartItems });
    setCartItems([]);
    setCurrentView('home');
    alert(`¡Compra realizada con éxito, ${formData.name}!`);
  };

  // Navegación
  const goToHome = () => setCurrentView('home');
  const goToKids = () => setCurrentView('kids');
  const goToTeens = () => setCurrentView('teens');
  const goToCart = () => setCurrentView('cart');

  return (
    <div className="App">
      <Header 
        cartCount={cartItems.length} 
        onCartClick={goToCart}
        onHomeClick={goToHome}
        onKidsClick={goToKids}
        onTeensClick={goToTeens}
      />

      <main>
        {currentView === 'home' && (
          <HomePage 
            onAddToCart={handleAddToCart}
            onKidsClick={goToKids}
            onTeensClick={goToTeens}
          />
        )}

        {currentView === 'kids' && (
          <KidsSection onAddToCart={handleAddToCart} />
        )}

        {currentView === 'teens' && (
          <TeensSection onAddToCart={handleAddToCart} />
        )}

        {currentView === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveFromCart}
            onCheckout={handleCheckout}
            onBackToHome={goToHome}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;