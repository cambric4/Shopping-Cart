import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getItemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/shop" className="nav-link" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>
        <div className="cart-icon">
          🛒 <span>{getItemCount()}</span>
          <Link to="/checkout" className="checkout-button">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;