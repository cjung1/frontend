import React, { useEffect, useState, useContext } from "react";
import BookCard from "../BookCard/BookCard";
import { SearchContext } from "../../context/SearchContext";
import "./BookList.scss";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [maxResults, setMaxResults] = useState(32);
  const { searchTerm } = useContext(SearchContext);
  const [query, setQuery] = useState(searchTerm || "react");
  const [sortPrice, setSortPrice] = useState(""); // '', 'asc', 'desc'

  useEffect(() => {
    setQuery(searchTerm.trim() === "" ? "react" : searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    };
    fetchBooks();
  }, [query, startIndex, maxResults]);

  // Helper to get book price as a number
  const getBookPrice = (book) =>
    typeof book.saleInfo?.listPrice?.amount === "number"
      ? book.saleInfo.listPrice.amount
      : 999999;

  let sortedBooks = [...books];
  if (sortPrice === "asc") {
    sortedBooks.sort((a, b) => getBookPrice(a) - getBookPrice(b));
  } else if (sortPrice === "desc") {
    sortedBooks.sort((a, b) => getBookPrice(b) - getBookPrice(a));
  } else {
    sortedBooks.sort((a, b) => {
      const titleA = a.volumeInfo.title.toLowerCase();
      const titleB = b.volumeInfo.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }

  useEffect(() => {
    // Điều chỉnh số lượng sách trên mỗi trang theo kích thước màn hình
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setMaxResults(10);
      } else if (width < 900) {
        setMaxResults(20);
      } else {
        setMaxResults(32);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setStartIndex(0);
  }, [searchTerm]);

  return (
    <div>
      <div className="booklist-toolbar">
        <label htmlFor="sort-price">Sắp xếp theo : </label>
        <select
          id="sort-price"
          value={sortPrice}
          onChange={(e) => setSortPrice(e.target.value)}
          className="sort-select"
        >
          <option value="">Mặc định</option>
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>
      <div className="grid">
        {sortedBooks.length > 0 ? (
          sortedBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>Không có sách phù hợp với tìm kiếm của bạn.</p>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() =>
            setStartIndex((prev) => Math.max(prev - maxResults, 0))
          }
        >
          ←
        </button>
        <span>Trang {Math.floor(startIndex / maxResults) + 1}</span>
        <button onClick={() => setStartIndex((prev) => prev + maxResults)}>
          →
        </button>
      </div>
    </div>
  );
};

export default BookList;
