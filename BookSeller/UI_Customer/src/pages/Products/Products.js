import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "../../pages/BookDetail/BookDetail.scss";
import BookList from "../../components/BookList/BookList";

const Products = () => {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Trang chủ
        </Link>
        <FaAngleRight className="breadcrumb-sep" />
        <span className="breadcrumb-current">Sản phẩm</span>
      </div>
      <BookList />
    </>
  );
};

export default Products;
