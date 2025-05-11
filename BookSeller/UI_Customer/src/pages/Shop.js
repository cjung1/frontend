import React from "react";
import BookList from "../components/BookList/BookList";
import { Link } from "react-router-dom";
import "./BookDetail.scss";

const Shop = () => {
  return (
    <>
      <div className="breadcrumb">
        <span className="breadcrumb-link">Trang chủ</span>
      </div>
      <BookList />
    </>
  );
};

export default Shop;
