// src/pages/Cart.jsx
import React, { useEffect, useState } from "react";
import { FaTrash, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.scss";

const Cart = () => {
  const { cart, removeFromCart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [inputQty, setInputQty] = useState({});
  const navigate = useNavigate();

  const formatPrice = (price) => {
    if (!price) return 999999;
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  // Update total price when cart changes
  useEffect(() => {
    const total = cart.reduce((total, book) => {
      const bookPrice = book.saleInfo?.listPrice?.amount || 999999;
      const qty = book.quantity || 1;
      return total + bookPrice * qty;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleQtyChange = (bookId, type, value = null) => {
    const updatedCart = cart.map((book) => {
      if (book.id === bookId) {
        const currentQty = book.quantity || 1;
        const newQty = value !== null
          ? parseInt(value) < 1 ? 1 : Math.min(999, parseInt(value))
          : type === "inc"
            ? currentQty + 1
            : type === "dec"
            ? Math.max(1, currentQty - 1)
            : currentQty;
  
        // Cập nhật inputQty ngay tại đây
        setInputQty((prev) => ({
          ...prev,
          [bookId]: newQty,
        }));
  
        return { ...book, quantity: newQty };
      }
      return book;
    });
  
    const total = updatedCart.reduce((total, book) => {
      const bookPrice = book.saleInfo?.listPrice?.amount || 999999;
      const qty = book.quantity || 1;
      return total + bookPrice * qty;
    }, 0);
    setTotalPrice(total);
  
    setCart(updatedCart);
  };
  
  const handleCheckout = () => {
    const cartItems = cart.map(book => ({
      id: book.id,
      name: book.volumeInfo.title,
      price: book.saleInfo?.listPrice?.amount || 999999,
      quantity: book.quantity || 1,
      image: book.volumeInfo.imageLinks?.thumbnail
    }));
    navigate('/payment', { state: { cartItems } });
  };

  return (
    <>
      <div className="breadcrumb">
              <Link to="/" className="breadcrumb-link">
                Trang chủ
              </Link>
              <FaAngleRight className="breadcrumb-sep" />
              <Link to="/products" className="breadcrumb-next">
                Sản phẩm
              </Link>
              <FaAngleRight className="breadcrumb-sep" />
              <span className="breadcrumb-current">Giỏ hàng</span>
            </div>
      <div className="cart-layout">
        <div className="cart cart-main">
          <h2>Giỏ hàng của bạn</h2>
          {cart.length === 0 ? (
            <p>Giỏ hàng của bạn hiện tại chưa có sản phẩm nào.</p>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>Thông tin sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((book) => {
                    const price = book.saleInfo?.listPrice?.amount || 999999;
                    const qty = book.quantity || 1;
                    return (
                      <tr key={book.id} className="cart-row">
                        <td className="cart-product-info">
                          <Link to={`/book/${book.id}`}>
                            <img
                              className="cart-img"
                              src={
                                book.volumeInfo.imageLinks?.thumbnail ||
                                "https://via.placeholder.com/150x225?text=No+Image"
                              }
                              alt={book.volumeInfo.title}
                            />
                          </Link>
                          <div className="cart-info-text">
                            <Link to={`/book/${book.id}`} className="cart-title">
                              {book.volumeInfo.title}
                            </Link>
                            <button
                              className="cart-remove"
                              onClick={() => removeFromCart(book.id)}
                            >
                              <FaTrash size={20} color="#e53935" />
                            </button>
                          </div>
                        </td>
                        <td className="cart-price">
                          {formatPrice(price)}
                          <span className="cart-currency">₫</span>
                        </td>
                        <td>
                          <div className="cart-qty">
                            <button onClick={() => handleQtyChange(book.id, "dec")}>
                              -
                            </button>
                            <input
                              type="number"
                              value={inputQty[book.id] !== undefined ? inputQty[book.id] : qty}
                              onChange={(e) => {
                                const value = e.target.value;
                                // Cho phép giá trị rỗng hoặc số từ 0-999
                                if (value === "" || /^[0-9]{0,3}$/.test(value)) {
                                  setInputQty((prev) => ({
                                    ...prev,
                                    [book.id]: value,
                                  }));
                                  // Cập nhật ngay lập tức khi thay đổi
                                  if (value !== "" && !isNaN(value)) {
                                    handleQtyChange(book.id, null, value);
                                  }
                                }
                              }}
                              onBlur={() => {
                                const value = inputQty[book.id];
                                if (value === "" || isNaN(value)) {
                                  // Nếu trống hoặc không hợp lệ, reset lại ô input
                                  setInputQty((prev) => {
                                    const updated = { ...prev };
                                    delete updated[book.id];
                                    return updated;
                                  });
                                }
                              }}
                              min="1"
                              max="999"
                            />
                            <button onClick={() => handleQtyChange(book.id, "inc")}>
                              +
                            </button>
                          </div>
                        </td>
                        <td className="cart-total">
                          {formatPrice(price * qty)}
                          <span className="cart-currency">₫</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="cart-summary">
                Tổng tiền: <span>{formatPrice(totalPrice)}₫</span>
              </div>
              <button className="cart-checkout-btn" onClick={handleCheckout}>Thanh toán</button>
            </>
          )}
        </div>
        <div className="cart-sidebar">
          {/* Sidebar is now empty or you can remove this div entirely if not needed */}
        </div>
      </div>
    </>
  );
};

export default Cart;
