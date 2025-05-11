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
      <div className="shop">
        <Link to="/">
          <img src="/G12.png" alt="G12 Book Store Logo" />
        </Link>
      </div>
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
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="cart-link"
            style={{ position: "relative", display: "inline-block" }}
          >
            <FaShoppingCart size={26} />
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
            {cartItemCount === 0 && <span className="cart-badge">0</span>}
          </Link>
        </li>
        <li>
          <FaUser
            size={26}
            style={{ marginLeft: "18px", verticalAlign: "middle" }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
