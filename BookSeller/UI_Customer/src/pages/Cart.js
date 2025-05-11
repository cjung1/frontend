// src/pages/Cart.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.scss";

const Cart = ({ book }) => {
  const { cart, removeFromCart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleQtyChange = (bookId, type) => {
    const updatedCart = cart.map((book) => {
      if (book.id === bookId) {
        const currentQty = book.quantity || 1;
        const newQty =
          type === "inc"
            ? currentQty + 1
            : type === "dec"
            ? Math.max(1, currentQty - 1)
            : currentQty;
        return { ...book, quantity: newQty };
      }
      return book;
    });
    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return <p>Giỏ hàng của bạn hiện tại chưa có sản phẩm nào.</p>;
  }

  return (
    <>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Trang chủ
        </Link>

        <span className="breadcrumb-sep">&gt;</span>
        <span className="breadcrumb-current">Giỏ hàng</span>
      </div>
      <div className="cart-layout">
        <div className="cart cart-main">
          <h2>Giỏ hàng của bạn</h2>
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
                        <div
                          className="cart-remove"
                          onClick={() => removeFromCart(book.id)}
                        >
                          Xóa
                        </div>
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
                        <span>{qty}</span>
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
          <button className="cart-checkout-btn">Thanh toán</button>
        </div>
        <div className="cart-sidebar">
          {/* Sidebar is now empty or you can remove this div entirely if not needed */}
        </div>
      </div>
    </>
  );
};

export default Cart;
