import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data
    // This is a placeholder and should be replaced with actual data fetching logic
    setProduct({
      id: 1,
      name: 'Sample Product',
      price: 100,
      image: 'https://via.placeholder.com/150'
    });
  }, []);

  const handleAddToCart = () => {
    // Implement add to cart logic
  };

  const handleBuyNow = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    };
    navigate('/payment', { state: { cartItems: [item] } });
  };

  return (
    <div className="product-detail">
      {/* Render product details */}
      <div className="product-actions">
        <Button type="primary" onClick={handleAddToCart}>
          Thêm vào giỏ
        </Button>
        <Button type="primary" onClick={handleBuyNow}>
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail; 