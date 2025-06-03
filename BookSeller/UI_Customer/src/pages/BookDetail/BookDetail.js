import { useCart } from "../../context/CartContext";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom"; // Để lấy params từ URL
import { FaAngleRight } from "react-icons/fa"; // Thêm biểu tượng giỏ hàng
import "./BookDetail.scss";

const BOOKS_PER_SLIDE = 5;

const BookDetail = () => {
  const { bookId } = useParams(); // Lấy ID sách từ URL
  const [book, setBook] = React.useState(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const stock = 100; // giả lập tồn kho
  const [recommended, setRecommended] = React.useState([]);
  const [recIndex, setRecIndex] = useState(0);

  React.useEffect(() => {
    const fetchBookDetail = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      const data = await response.json();
      setBook(data);
    };

    fetchBookDetail();
  }, [bookId]);

  // Fetch recommended books based on author or subject
  React.useEffect(() => {
    if (!book) return;
    let query = "sach";
    if (book.volumeInfo?.authors && book.volumeInfo.authors.length > 0) {
      query = book.volumeInfo.authors[0];
    } else if (
      book.volumeInfo?.categories &&
      book.volumeInfo.categories.length > 0
    ) {
      query = book.volumeInfo.categories[0];
    }
    const fetchRecommended = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&maxResults=12`
      );
      const data = await response.json();
      setRecommended((data.items || []).filter((b) => b.id !== bookId));
      setRecIndex(0); // reset slider when book changes
    };
    fetchRecommended();
  }, [book]);

  // Helper to format price
  const formatPrice = (price) => {
    if (!price) return 999999;
    return price.toLocaleString("vi-VN");
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "inc") return prev < stock ? prev + 1 : prev;
      if (type === "dec") return prev > 1 ? prev - 1 : prev;
      return prev;
    });
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(book);
    }
  };

  const handleBuyNow = () => {
    // Tùy bạn xử lý, ví dụ chuyển hướng trang thanh toán hoặc alert
    alert("Chức năng Mua ngay đang phát triển!");
  };

  // Slider navigation
  const maxIndex = Math.max(0, recommended.length - BOOKS_PER_SLIDE);
  const handlePrev = () => setRecIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setRecIndex((i) => Math.min(i + 1, maxIndex));

  if (!book) {
    return <p className="loading">Đang tải thông tin sách...</p>;
  }

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
        <span className="breadcrumb-current">{book.volumeInfo.title}</span>
      </div>
      <div className="book-detail">
        <div className="book-main">
          <div className="book-image">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
          </div>
          <div className="book-info">
            <h2 className="book-title">{book.volumeInfo.title}</h2>
            <p className="author">
              <strong>Tác giả:</strong> {book.volumeInfo.authors?.join(", ")}
            </p>
            <p className="price">
              <span className="price-value">
                {book.saleInfo?.listPrice?.amount
                  ? formatPrice(book.saleInfo.listPrice.amount)
                  : formatPrice(999999)}
                <span className="currency">₫</span>
              </span>
            </p>
            <div className="purchase-section">
              <div className="quantity-stock">
                <div className="quantity-selector">
                  <button
                    onClick={() => handleQuantityChange("dec")}
                    className="qty-btn"
                  >
                    -
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("inc")}
                    className="qty-btn"
                  >
                    +
                  </button>
                  <span className="stock">Còn lại {stock} trong kho</span>
                </div>
              </div>
              <div className="purchase-buttons">
                <button
                  className="add-to-cart-outline"
                  onClick={handleAddToCart}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className="buy-now" onClick={handleBuyNow}>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="book-desc-section">
          <h3 className="desc-heading">Giới thiệu sách</h3>
          <div
  className="description"
  dangerouslySetInnerHTML={{
    __html: book.volumeInfo.description
      ?.replace(/Ê|_Ê/g, "")
      .replace(/<p><br><\/p>/g, ""),
  }}
></div>

        </div>
        
        <div className="recommend-section">
          <div className="recommend-header">
            <h3>Có thể bạn cũng thích</h3>
            <Link to="/products">Xem thêm</Link>
          </div>
          <div className="recommend-slider">
            <button
              className="slider-arrow left"
              onClick={handlePrev}
              disabled={recIndex === 0}
            >
              &#8592;
            </button>
            <div className="recommend-list-wrapper">
              <div
                className="recommend-list"
                style={{
                  transform: `translateX(-${
                    recIndex * (100 / BOOKS_PER_SLIDE)
                  }%)`,
                  transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
                }}
              >
                {recommended.map((b) => (
                  <Link
                    to={`/book/${b.id}`}
                    key={b.id}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="recommend-item">
                      <img
                        src={
                          b.volumeInfo.imageLinks?.thumbnail ||
                          "https://via.placeholder.com/120x180?text=No+Image"
                        }
                        alt={b.volumeInfo.title}
                      />
                      <div className="recommend-title">
                        {b.volumeInfo.title}
                      </div>
                      <div className="recommend-prices">
                        <span className="recommend-price">
                          {b.saleInfo?.listPrice?.amount
                            ? formatPrice(b.saleInfo.listPrice.amount)
                            : formatPrice(999999)}
                          ₫
                        </span>
                        {b.saleInfo?.listPrice?.amount &&
                          b.saleInfo?.retailPrice?.amount &&
                          b.saleInfo.retailPrice.amount >
                            b.saleInfo.listPrice.amount && (
                            <span className="recommend-old-price">
                              {formatPrice(b.saleInfo.retailPrice.amount)}₫
                            </span>
                          )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <button
              className="slider-arrow right"
              onClick={handleNext}
              disabled={recIndex === maxIndex}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
