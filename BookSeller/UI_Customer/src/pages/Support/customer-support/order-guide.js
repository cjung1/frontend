import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import "./order-guide.scss";
import "../../../pages/BookDetail/BookDetail.scss";

const OrderGuide = () => {
  return (
    <div className="order-guide-container">
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

      <h1>Hướng dẫn đặt hàng</h1>

      <div className="guide-content">
        <div className="guide-section">
          <p>Đến với G12Shop, quý khách có thể dễ dàng chọn được đầu sách mình mong muốn. Và đặt hàng trực tuyến với thao tác rất đơn giản sau đây:</p>
        </div>

        <div className="guide-section">
          <h2>1. Chọn sản phẩm cần mua</h2>
          <ul>
            <li>Hệ thống G12Shop cung cấp cho khách hàng các thông tin chi tiết nhất liên quan đến cuốn sách như: Nhà xuất bản, năm xuất bản, mục lục sách giúp khách hàng có sự lựa chọn tốt nhất.</li>
            <li>Sau khi xem xong các thông tin của sản phẩm, Qúy khách nhấn vào nút "MUA NGAY" để mua sách và đi đến thanh toán hoặc "THÊM VÀO GIỎ HÀNG" nếu quý khách muốn mua thêm sản phẩm khác sau đó tiếp tục chọn sách.</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>2. Kiểm tra giỏ hàng</h2>
          <ul>
            <li>Khách hàng nhấn vào mục "GIỎ HÀNG" sẽ hiện ra danh sách và số lượng sản phẩm vừa chọn trong giỏ hàng.</li>
            <li>Khách hàng nhấn nút "Thanh Toán" để thực hiện bước kế tiếp.</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>3. Cung cấp thông tin giao hàng</h2>
          <ul>
            <li>Khách hàng điền đầy đủ thông tin vào các ô.</li>
            <li>Phần ghi chú cho đơn hàng nếu quý khách có những ghi chú đặc biệt trên đơn hàng (ví dụ: Thời gian giao hàng, giao cho cá nhân nào?)</li>
            <li>Khách hàng lưu ý ghi rõ, cụ thể thông tin để chúng tôi vận chuyển hàng được nhanh nhất.</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>4. Chọn hình thức vận chuyển và thanh toán đơn hàng</h2>
          <div className="subsection">
            <h3>A. Hình thức vận chuyển</h3>
            <p>Khách hàng lựa chọn hình thức vận chuyển dựa trên khu vực và thời gian mong muốn nhận hàng. G12Shop áp dụng 2 hình thức vận chuyển:</p>
            <ul>
              <li>GỬI NHANH</li>
              <li>GỬI THƯỜNG</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>B. Hình thức thanh toán</h3>
            <p>G12Shop áp dụng 2 hình thức thanh toán:</p>
            <ul>
              <li>Thanh toán trực tiếp khi nhận hàng (COD)</li>
              <li>Thanh toán qua ngân hàng</li>
            </ul>
          </div>
        </div>

        <div className="guide-section">
          <h2>5. Xác nhận đơn đặt hàng</h2>
          <p>Quý khách kiểm tra lại "Địa chỉ thanh toán", "Địa chỉ giao hàng", "Số tiền trên đơn hàng", nếu các thông tin đã khớp xin vui lòng nhấn nút "GỬI ĐƠN HÀNG" để xác nhận đặt hàng.</p>
          <p>Lưu ý: Chúng tôi căn cứ vào Tên sách và/hoặc Mã sách để làm cơ sở cho việc giao nhận sách đúng chủng loại.</p>
        </div>

        <div className="guide-section">
          <p>Trân trọng cám ơn Qúy Khách!</p>
        </div>
      </div>
    </div>
  );
};

export default OrderGuide;
