// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";
import { IoIosSearch } from "react-icons/io";
import "../../context/SearchContext.scss";
import "./NavBar.scss"; // Thêm file CSS cho Navbar
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useCart(); // Lấy số lượng sách trong giỏ hàng từ CartContext
  const cartItemCount = cart.length; // Đếm số lượng sách trong giỏ hàng
  const { searchTerm, setSearchTerm, handleSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(searchTerm);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    handleSearch();
  };

  return (
    <nav>
      <div className="navbar-left">
        <div className="shop">
          <Link to="/">
            <img src="/G12.png" alt="G12 Book Store Logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/authors">Tác Giả</Link>
          </li>
          <li>
            <Link to="/about">Về chúng tôi</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li>
            <Link to="/support">Hỗ trợ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <form className="navbar-search" onSubmit={onSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Tìm kiếm..."
            value={inputValue}
            onChange={onInputChange}
          />
          <button className="search-button" type="submit">
            <IoIosSearch />
          </button>
        </form>
        <FaUser
          size={26}
          style={{ marginLeft: "18px", verticalAlign: "middle" }}
        />
        <Link
          to="/cart"
          className="cart-link"
          style={{
            position: "relative",
            display: "inline-block",
            marginLeft: "18px",
          }}
        >
          <FaShoppingCart size={26} />
          <span className="cart-badge">{cartItemCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
