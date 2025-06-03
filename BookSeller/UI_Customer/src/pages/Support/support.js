import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "./support.scss";
import "../../pages/BookDetail/BookDetail.scss";

const Support = () => {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Trang chủ</Link>
        <FaAngleRight className="breadcrumb-sep" />
        <span className="breadcrumb-current">Hỗ trợ</span>
      </div>

      <div className="support-container">
        <h1>Hỗ trợ khách hàng</h1>

        <div className="support-content">
          <div className="support-section">
            <h2>Các câu hỏi thường gặp</h2>
            <div className="faq-grid">
              <Link to="/customer-support/order-guide" className="faq-item">
                <h3>1. Hướng dẫn đặt hàng</h3>
                <p>Bước 1: Chọn sách bạn muốn mua</p>
                <p>Bước 2: Nhấn "Thêm vào giỏ hàng"</p>
                <p>Bước 3: Xem giỏ hàng và điều chỉnh số lượng nếu cần</p>
                <p>Bước 4: Nhấn "Thanh toán" để hoàn tất đơn hàng</p>
              </Link>
              <Link to="/customer-support/shipping-guide" className="faq-item">
                <h3>2. Hình thức vận chuyển</h3>
                <p>1. Giao hàng nhanh: 2-3 ngày làm việc</p>
                <p>2. Giao hàng tiết kiệm: 4-7 ngày làm việc</p>
                <p>3. Giao hàng miễn phí cho đơn hàng từ 300.000đ</p>
                <p>4. Khách hàng có thể chọn điểm nhận hàng tại các bưu cục</p>
              </Link>
              <Link to="/customer-support/payment-guide" className="faq-item">
                <h3>3. Hướng dẫn thanh toán</h3>
                <p>1. Thanh toán trực tuyến qua thẻ tín dụng/debit</p>
                <p>2. Chuyển khoản ngân hàng</p>
                <p>3. Thanh toán khi nhận hàng (COD)</p>
                <p>4. Thanh toán qua ví điện tử</p>
              </Link>
            </div>
          </div>

          <div className="support-section">
            <h2>Liên hệ hỗ trợ</h2>
            <div className="contact-info">
              <div className="contact-item">
                <h3>Hotline</h3>
                <p>02435146876</p>
              </div>
              <div className="contact-item">
                <h3>Email hỗ trợ</h3>
                <p>support@nhanam.vn</p>
              </div>
              <div className="contact-item">
                <h3>Giờ làm việc</h3>
                <p>8:00 - 17:00 từ thứ 2 đến thứ 7</p>
              </div>
            </div>
          </div>

          <div className="support-section">
            <h2>Địa chỉ cửa hàng</h2>
            <div className="store-info">
              <div className="store-item">
                <h3>Cửa hàng 1</h3>
                <p>Số 1, Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</p>
                <p>Điện thoại: 02435146876</p>
              </div>
              <div className="store-item">
                <h3>Cửa hàng 2</h3>
                <p>123 Lê Văn Việt, Phường Tăng Nhơn Phú A, Quận 9, TP.HCM</p>
                <p>Điện thoại: 02835146876</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
