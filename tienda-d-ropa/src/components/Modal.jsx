// src/components/Modal.jsx
import React from 'react';
import '../App.css';

const Modal = ({ isOpen, onClose, onConfirm, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>🛒 Agregar al carrito</h3>
        <p>¿Quieres añadir <strong>{productName}</strong> a tu carrito de compras?</p>
        <div className="modal-buttons">
          <button className="modal-btn-confirm" onClick={onConfirm}>
            Sí, agregar
          </button>
          <button className="modal-btn-close" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;