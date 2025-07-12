import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, setCart } = useCart();

  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = (cart ?? []).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <div className="checkout-page" style={{ padding: '2rem' }}>
      <h2>Checkout</h2>
      {(cart ?? []).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {(cart ?? []).map((item) => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                {item.title} x {item.quantity} — ${
                  (item.price * item.quantity).toFixed(2)
                }
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{ marginLeft: '1rem', color: 'white', backgroundColor: 'crimson', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button disabled style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
            Place Order (Not implemented)
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;