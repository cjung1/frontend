import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Input, Button, Radio, message } from 'antd';
import './Payment.css';

const Payment = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);

  // Get cart items from location state
  const cartItems = location.state?.cartItems || [];
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Handle payment based on selected method
      if (paymentMethod === 'vnpay') {
        // Redirect to VNPay payment gateway
        // Implement VNPay integration here
        message.success('Redirecting to VNPay...');
      } else {
        // Handle COD payment
        // Implement your order creation logic here
        message.success('Order placed successfully!');
        navigate('/order-success');
      }
    } catch (error) {
      message.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <h1>Thanh Toán</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <div className="payment-section">
            <h2>Thông Tin Giao Hàng</h2>
            <Form.Item
              name="fullName"
              label="Họ và tên"
              rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
            >
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Số điện thoại"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
                { pattern: /^[0-9]{10}$/, message: 'Số điện thoại không hợp lệ' }
              ]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Vui lòng nhập email' },
                { type: 'email', message: 'Email không hợp lệ' }
              ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
            >
              <Input.TextArea placeholder="Nhập địa chỉ giao hàng" />
            </Form.Item>

            <Form.Item
              name="note"
              label="Ghi chú"
            >
              <Input.TextArea placeholder="Nhập ghi chú (không bắt buộc)" />
            </Form.Item>
          </div>

          <div className="payment-section">
            <h2>Phương Thức Thanh Toán</h2>
            <Form.Item name="paymentMethod" initialValue="cod">
              <Radio.Group onChange={(e) => setPaymentMethod(e.target.value)}>
                <Radio value="cod">Thanh toán khi nhận hàng (COD)</Radio>
                <Radio value="vnpay">Thanh toán qua VNPay</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="payment-summary">
            <h2>Tổng Thanh Toán</h2>
            <div className="summary-item">
              <span>Tạm tính:</span>
              <span>{totalAmount.toLocaleString('vi-VN')}đ</span>
            </div>
            <div className="summary-item">
              <span>Phí vận chuyển:</span>
              <span>Miễn phí</span>
            </div>
            <div className="summary-item total">
              <span>Tổng cộng:</span>
              <span>{totalAmount.toLocaleString('vi-VN')}đ</span>
            </div>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="payment-button"
            >
              Đặt Hàng
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Payment; 