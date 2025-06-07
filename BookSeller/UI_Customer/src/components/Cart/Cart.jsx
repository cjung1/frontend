import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const handleCheckout = () => {
    navigate('/payment', { state: { cartItems: cartItems } });
  };

  return (
    <div className="cart-actions">
      <Button type="primary" onClick={handleCheckout}>
        Thanh toán
      </Button>
    </div>
  );
};

export default Cart; 