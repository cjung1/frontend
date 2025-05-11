// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

// Tạo context để quản lý giỏ hàng
const CartContext = createContext();

// Hook để sử dụng CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider để cung cấp giỏ hàng cho các component con
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Giỏ hàng (dùng useState để quản lý)

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (book) => {
    setCart((prevCart) => {
      // Kiểm tra xem sách đã có trong giỏ hàng chưa
      const existingBookIndex = prevCart.findIndex(
        (item) => item.id === book.id
      );

      if (existingBookIndex !== -1) {
        // Nếu sách đã tồn tại, tạo một bản sao mới của giỏ hàng
        const newCart = [...prevCart];
        // Tăng số lượng của sách đó lên 1
        newCart[existingBookIndex] = {
          ...newCart[existingBookIndex],
          quantity: (newCart[existingBookIndex].quantity || 1) + 1,
        };
        return newCart;
      } else {
        // Nếu sách chưa tồn tại, thêm mới vào giỏ hàng với số lượng là 1
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId)); // Lọc sách có id khác để xóa
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
