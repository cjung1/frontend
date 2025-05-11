import React from "react";
import BookList from "../components/BookList";

const Home = () => {
  return (
    <div>
      <h1>Chào mừng đến với Web bán sách</h1>
      <BookList /> {/* Hiển thị BookList */}
    </div>
  );
};

export default Home;
