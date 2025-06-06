// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products"; // Trang hiển thị danh sách sách
import Cart from "./pages/Cart/Cart"; // Trang giỏ hàng
import Login from "./pages/Login/Login"; // Trang đăng nhập
import Register from "./pages/Register/Register"; // Trang đăng ký
import Navbar from "./components/NavBar/Navbar"; // Thanh điều hướng
import About from "./pages/about/about";
import Home from "./pages/Home/Home"; // Trang chủ
import Footer from "./components/Footer/Footer"; // Footer
import BookDetail from "./pages/BookDetail/BookDetail"; // Thêm trang BookDetail
import Contact from "./pages/Contact/contact";
import Support from './pages/Support/support';
import OrderGuide from './pages/Support/customer-support/order-guide';
import ShippingGuide from './pages/Support/customer-support/shipping-guide';
import PaymentGuide from './pages/Support/customer-support/payment-guide';
import { CartProvider } from "./context/CartContext"; 
import { SearchProvider } from "./context/SearchContext";
import { AuthProvider } from "./context/AuthContext"; 
import Profile from './pages/Profile/Profile'; 
import Payment from './components/Payment/Payment';

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/book/:bookId" element={<BookDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/customer-support/order-guide" element={<OrderGuide />} />
              <Route path="/customer-support/shipping-guide" element={<ShippingGuide />} />
              <Route path="/customer-support/payment-guide" element={<PaymentGuide />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/register" element={<Register />} /> 
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
