import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="quantity-control">
        <button onClick={decrement}>-</button>
        <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, +e.target.value))} />
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;