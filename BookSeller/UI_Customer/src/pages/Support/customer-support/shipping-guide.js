import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import "./shipping-guide.scss";

const ShippingGuide = () => {
  return (
    <div className="shipping-guide-container">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Trang chủ
        </Link>
        <FaAngleRight className="breadcrumb-sep" />
        <Link to="/support" className="breadcrumb-next">
          Hỗ trợ
        </Link>
        <FaAngleRight className="breadcrumb-sep" />
        <span className="breadcrumb-current">Hình thức vận chuyển</span>
      </div>

      <h1>Hình thức vận chuyển</h1>

      <div className="guide-content">
        <div className="guide-section">
          <p>G12Shop áp dụng hình thức vận chuyển đơn hàng như sau:</p>
        </div>

        <div className="guide-section">
          <h2>1. Khách hàng ở nội thành HÀ NỘI</h2>
          <p>Vận chuyển trực tiếp, thời gian giao hàng trong vòng 24h kể từ khi xác nhận đơn hàng.</p>
          <div className="subsection">
            <h3>Phí vận chuyển</h3>
            <ul>
              <li>Đơn hàng dưới 300.000đ: phí vận chuyển 30.000đ</li>
              <li>Đơn hàng từ 300.000đ trở lên: miễn phí vận chuyển</li>
            </ul>
          </div>
        </div>

        <div className="guide-section">
          <h2>2. Khách hàng ở ngoại thành Hà Nội và tỉnh thành khác</h2>
          <p>Chọn 1 trong 2 hình thức:</p>

          <div className="subsection">
            <h3>A. Gửi thường</h3>
            <p>Thời gian: 3-7 ngày làm việc (không kể thứ 7, chủ nhật, ngày nghỉ lễ)</p>
            <div className="fee-table">
              <table>
                <thead>
                  <tr>
                    <th>Đơn hàng</th>
                    <th>Phí vận chuyển</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dưới 350.000đ</td>
                    <td>30.000đ</td>
                  </tr>
                  <tr>
                    <td>Từ 350.000đ trở lên</td>
                    <td>Free shipping</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="subsection">
            <h3>B. Gửi nhanh</h3>
            <p>Thời gian: 1-3 ngày làm việc (không kể thứ 7, chủ nhật, ngày nghỉ lễ)</p>
            <p>Hỗ trợ 50% phí gửi hàng</p>
            <div className="fee-table">
              <h4>Bảng chi tiết phí chuyển phát nhanh</h4>
              <table>
                <thead>
                  <tr>
                    <th>Khối lượng</th>
                    <th>Phí vận chuyển (VNĐ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dưới 500g</td>
                    <td>45.000</td>
                  </tr>
                  <tr>
                    <td>500 – 999g</td>
                    <td>55.000</td>
                  </tr>
                  <tr>
                    <td>1000 – 1499g</td>
                    <td>65.000</td>
                  </tr>
                  <tr>
                    <td>1500 – 1999g</td>
                    <td>75.000</td>
                  </tr>
                  <tr>
                    <td>Mỗi 500g tiếp theo</td>
                    <td>5.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="subsection">
            <h3>Lưu ý chung</h3>
            <ul>
              <li>Tất cả các đơn hàng đều được giao trực tiếp tại địa chỉ của Khách hàng.</li>
              <li>Thời gian giao hàng tối đa là 3 ngày làm việc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingGuide;
