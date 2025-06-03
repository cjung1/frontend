// src/pages/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Kiểm tra xác nhận mật khẩu
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    try {
      // Xử lý đăng ký (đây là ví dụ, bạn cần thay thế bằng API thực tế)
      // Kiểm tra đơn giản
      if (formData.email.includes('@') && formData.password.length >= 6) {
        // Lưu thông tin đăng ký (có thể sử dụng localStorage hoặc context)
        localStorage.setItem('user', JSON.stringify({ email: formData.email, name: formData.name }));
        navigate('/login'); // Chuyển hướng đến trang đăng nhập
      } else {
        setError('Email không hợp lệ hoặc mật khẩu phải có ít nhất 6 ký tự');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi khi đăng ký');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Đăng ký</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Họ và tên</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Nhập email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Xác nhận mật khẩu"
            />
          </div>
          <button type="submit" className="register-button">Đăng ký</button>
        </form>
        <div className="login-link">
          Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
