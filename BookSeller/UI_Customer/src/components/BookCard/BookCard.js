import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa"; // Add cart icon
import "./BookCard.scss";

// Function to format price with thousand separator
const formatPrice = (price) => {
  if (!price) return 999999;
  return new Intl.NumberFormat("vi-VN").format(price);
};

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  const price = book.saleInfo?.listPrice?.amount || 999999;

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
      </Link>
      <div className="book-details">
        <h3>{book.volumeInfo.title}</h3>
        <div className="price-cart">
          <p className="price">{formatPrice(price)} VND</p>
          <button className="add-to-cart" onClick={() => addToCart(book)}>
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
