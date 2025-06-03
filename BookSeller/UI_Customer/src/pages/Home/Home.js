import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Home.scss";
import RecommendedBooks from "../../components/recommendedBook/recommendedBook";

const Home = () => {
  const [members, setMembers] = useState([]);
  const { bookId } = useParams(); // Lấy ID sách từ URL
  const [book, setBook] = React.useState(null);
  const [products, setProducts] = React.useState([]);
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
        )}&maxResults=20`
      );
      const data = await response.json();
      setProducts((data.items || []).filter((b) => b.id !== bookId));
      setRecIndex(0); // reset slider when book changes
    };

    setMembers([
      {
        id: 1,
        name: "Dương Tuấn Nghĩa",
        image: "/member/Screenshot 2025-05-29 222210.png",
      },
      {
        id: 2,
        name: "Bùi Việt Hưng",
        image: "/member/Screenshot 2025-05-29 152846.png",
      },
      {
        id: 3,
        name: "Trần Đình Nhật Minh",
        image: "/member/Screenshot 2025-05-29 222108.png",
      },
      {
        id: 4,
        name: "Đặng Thành Tựu",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        id: 5,
        name: "Bùi Quang Tùng",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    ]);

    fetchRecommended();
  }, [book, bookId]);


  // Slider navigation

  if (!book) {
    return <p className="loading">Đang tải thông tin sách...</p>;
  }


  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Chào mừng đến với G12 Shop</h1>
          <h2>Tìm kiếm cuốn sách yêu thích của bạn</h2>
          <p>Khám phá kho sách đa dạng từ các tác giả hàng đầu</p>
          <Link to="/products" className="cta-button">
            Mua ngay
          </Link>
        </div>
      </div>

      {/* Member Profiles Section */}
      <section className="member-section">
        <div className="member-container">
          <div className="title-border">
            <Link to="/about" className="title-module">
              <h2>Thành viên nhóm</h2>
            </Link>
          </div>
          <div className="member-grid">
            {members.map((member) => (
              <div key={member.id} className="member-card">
                <img src={member.image} alt={member.name} className="image-200" />
                <h3>{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Books Section */}
      <RecommendedBooks
  books={products}
  recIndex={recIndex}
  setRecIndex={setRecIndex}
  title="Sản phẩm của chúng tôi"
/>
    </div>
  );
};

export default Home;
