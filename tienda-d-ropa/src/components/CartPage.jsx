// src/components/CartPage.jsx
import React, { useState } from 'react';
import '../App.css';

const CartPage = ({ cartItems, onQuantityChange, onRemove, onCheckout, onBackToHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    onCheckout(formData);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>🛒 Carrito</h2>
        <p className="empty-cart">No hay productos en el carrito</p>
        <button className="btn-primary" onClick={onBackToHome}>Seguir comprando</button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>🛒 Carrito</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p className="item-price">Q{item.price.toFixed(2)}</p>
              </div>
              <div className="quantity-control">
                <button 
                  className="qty-btn"
                  onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                >−</button>
                <span>{item.quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                >+</button>
              </div>
              <p className="item-total">Q{(item.price * item.quantity).toFixed(2)}</p>
              <button 
                className="btn-remove"
                onClick={() => onRemove(item.id)}
              >✕</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Resumen de tu compra</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>Q{totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Envío estimado</span>
            <span>Q{(totalPrice * 0.05).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total estimado</span>
            <span>Q{(totalPrice * 1.05).toFixed(2)}</span>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <h4>Datos del cliente</h4>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Dirección de envío"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="btn-checkout">Finalizar compra</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;