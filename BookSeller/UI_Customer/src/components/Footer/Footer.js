import React from 'react';
import './Footer.scss';
import { FaPhone, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__socials">
          <a href="#"><img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/facebook-icon.png?1724988401192" alt="Facebook" className="social-icon" /></a>
          <a href="#"><img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/instagram-icon.png?1724988401192" alt="Instagram" className="social-icon" /></a>
          <a href="#"><img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/lazada-icon.png?1724988401192" alt="Lazada" className="social-icon" /></a>
          <a href="#"><img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/shopee-icon.png?1724988401192" alt="Shopee" className="social-icon" /></a>
          <a href="#"><img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/tiktok-icon.png?1724988401192" alt="Tiktok" className="social-icon" /></a>
        </div>
        <div className="footer__subscribe">
          <p>NHẬN THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI</p>
          <div className="footer__input-group">
            <input type="email" placeholder="Nhập email ưu đãi" />
            <button>Đăng kí</button>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__col">
          <Link to="/" >
            <img src="/G12.png" alt="G12 Book Store Logo" className="logo" />
          </Link>
          <p className="footer__slogan">Ở đây có bán sách</p>
          <p><FaMapMarkerAlt /> Số 1, Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội.</p>
          <p><FaEnvelope /> G12@gmail.com</p>
          <p><FaPhone /> 0123456789</p>
          <p><FaMobileAlt /> 0123456789</p>
        </div>

        <div className="footer__col">
          <h4>GIỚI THIỆU</h4>
          <Link to="/about" className='footer__link'>
            <p>Về Chúng Tôi</p>
          </Link>
          <Link to="/contact" className='footer__link'>
            <p>Liên hệ với chúng tôi</p>
          </Link>
        </div>

        <div className="footer__col">
          <h4>CHÍNH SÁCH</h4>
          <p>Chính sách bảo mật</p>
          <p>Chính sách đổi trả/hoàn tiền</p>
          <p>Chính sách thanh toán/ vận chuyển</p>
        </div>

        <div className="footer__col">
          <h4>PHƯƠNG THỨC THANH TOÁN</h4>
          <div className="footer__payments">
            <img src="https://bizweb.dktcdn.net/100/363/455/themes/918830/assets/payment_method.png?1724988401192" alt="payment" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
