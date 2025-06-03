import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import "./payment-guide.scss";
import "../../../pages/BookDetail/BookDetail.scss";


const PaymentGuide = () => {
  return (
    <div className="payment-guide-container">
      <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">
                      Trang chủ
                    </Link>
                    <FaAngleRight className="breadcrumb-sep" />
                    <Link to="/support" className="breadcrumb-next">
                      Hỗ trợ
                    </Link>
                    <FaAngleRight className="breadcrumb-sep" />
                    <span className="breadcrumb-current">Hướng dẫn đặt hàng</span>
                  </div>
      

      <h1>Hướng dẫn thanh toán</h1>

      <div className="guide-content">
        <div className="guide-section">
          <h2>1. Thanh toán trực tuyến</h2>
          <ul>
            <li>Chấp nhận thẻ tín dụng và debit</li>
            <li>Quy trình an toàn và bảo mật</li>
            <li>Không cần đăng ký tài khoản</li>
            <li>Hỗ trợ 24/7</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>2. Chuyển khoản ngân hàng</h2>
          <ul>
            <li>Chuyển khoản qua Internet Banking</li>
            <li>Chuyển khoản qua Mobile Banking</li>
            <li>Chuyển khoản tại quầy giao dịch</li>
            <li>Thông tin tài khoản:</li>
            <li>Ngân hàng: Vietcombank</li>
            <li>Số tài khoản: 0011000000123</li>
            <li>Chủ tài khoản: Công ty Sách Nhanh</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>3. Thanh toán khi nhận hàng (COD)</h2>
          <ul>
            <li>Thanh toán tiền mặt khi nhận hàng</li>
            <li>Được kiểm tra sách trước khi thanh toán</li>
            <li>Áp dụng cho đơn hàng dưới 500.000đ</li>
            <li>Phí COD: 20.000đ</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>4. Thanh toán qua ví điện tử</h2>
          <ul>
            <li>Hỗ trợ các ví: Momo, ZaloPay, ViettelPay</li>
            <li>Quy trình nhanh chóng và tiện lợi</li>
            <li>Không cần đăng ký tài khoản</li>
            <li>Không mất phí giao dịch</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>5. Lưu ý</h2>
          <ul>
            <li>Đảm bảo thông tin thanh toán chính xác</li>
            <li>Giữ lại thông tin giao dịch</li>
            <li>Liên hệ hỗ trợ nếu có vấn đề</li>
            <li>Chúng tôi không chịu trách nhiệm với giao dịch không chính xác</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentGuide;
