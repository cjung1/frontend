// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./pages/Shop"; // Trang hiển thị danh sách sách
import Cart from "./pages/Cart"; // Trang giỏ hàng
import Navbar from "./components/NavBar/Navbar"; // Thanh điều hướng
import Footer from "./components/Footer/Footer"; // Footer
import BookDetail from "./pages/BookDetail"; // Thêm trang BookDetail
import { CartProvider } from "./context/CartContext"; // Bọc ứng dụng với CartProvider
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/cart" element={<Cart />} /> {/* Route cho giỏ hàng */}
            <Route path="/book/:bookId" element={<BookDetail />} />{" "}
            {/* Route cho chi tiết sách */}
          </Routes>
          <Footer />
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
