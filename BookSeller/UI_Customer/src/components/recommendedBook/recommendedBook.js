import React from "react";
import { Link } from "react-router-dom";
import "./recommendedBook.scss";
import formatPrice from "../../utils/formatPrice";

const BOOKS_PER_SLIDE = 5;

const RecommendedBooks = ({ books, recIndex, setRecIndex, title = "Có thể bạn cũng thích" }) => {
  const maxIndex = Math.max(0, books.length - BOOKS_PER_SLIDE);
  const handlePrev = () => setRecIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setRecIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <div className="recommend-section">
      <div className="recommend-header">
        <h3>{title}</h3>
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
              transform: `translateX(-${recIndex * (100 / BOOKS_PER_SLIDE)}%)`,
              transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
            }}
          >
            {books.map((b) => (
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
                  <div className="recommend-title">{b.volumeInfo.title}</div>
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
  );
};

export default RecommendedBooks;
