import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./about.scss";

const About = () => {
  const members = [
    {
      id: 1,
      name: "Dương Tuấn Nghĩa",
      image: "/member/Screenshot 2025-05-29 222210.png",
      quote: "Talk is cheap. Show me the code."
    },
    {
      id: 2,
      name: "Bùi Việt Hưng",
      image: "/member/Screenshot 2025-05-29 152846.png",
      quote: "Code is poetry."
    },
    {
      id: 3,
      name: "Trần Đình Nhật Minh",
      image: "/member/Screenshot 2025-05-29 222108.png",
      quote: "It's not a bug – it's an undocumented feature."
    },
    {
      id: 4,
      name: "Đặng Thành Tựu",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      quote: " First, solve the problem. Then, write the code."
    },
    {
      id: 5,
      name: "Bùi Quang Tùng",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      quote: "Code is my passion."
    },
  ];

  return (
    <div className="about">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Trang chủ
        </Link>
        <FaAngleRight className="breadcrumb-sep" />
        <span className="breadcrumb-current">Về chúng tôi</span>
      </div>

      <div className="about-container">
        <div className="section introduction-section">
          <h2>Giới thiệu về chúng tôi</h2>
          <p>
            G12Shop là nền tảng mua sắm sách trực tuyến hàng đầu tại Việt Nam,
            được thành lập với sứ mệnh mang đến cho độc giả những trải nghiệm đọc sách
            tốt nhất. Chúng tôi cung cấp hơn 100,000 đầu sách từ các nhà xuất bản uy tín
            trong và ngoài nước, với chất lượng đảm bảo và giá cả cạnh tranh.
          </p>
          <p>
            Với hệ thống quản lý hiện đại và đội ngũ nhân viên chuyên nghiệp,
            G12Shop cam kết mang đến cho khách hàng dịch vụ mua sắm tiện lợi,
            an toàn và nhanh chóng.
          </p>
        </div>

        <div className="section mission-vision">
          <div className="card">
            <h3>Sứ mệnh</h3>
            <p>
              Mang đến cho độc giả Việt Nam những cuốn sách chất lượng cao,
              góp phần thúc đẩy văn hóa đọc và kiến thức trong cộng đồng.
            </p>
          </div>
          <div className="card">
            <h3>Tầm nhìn</h3>
            <p>
              Trở thành nền tảng mua sắm sách trực tuyến hàng đầu Việt Nam,
              được khách hàng tin tưởng và yêu mến.
            </p>
          </div>
        </div>

        <div className="section team-section">
          <h2>Đội ngũ của chúng tôi</h2>
          <div className="team-container">
            <div className="team-members">
              {members.map((member) => (
                <div key={member.id} className="team-member">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <h3>{member.name}</h3>
                  <p className="member-quote">"{member.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section contact-section">
          <Link to="/contact" className="contact-link">Liên hệ với chúng tôi</Link>
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <p>Số 1, Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội.</p>
            </div>
            <div className="info-item">
              <FaPhone />
              <p>Hotline: 0123456789</p>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <p>Email: G12@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
