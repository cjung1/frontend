import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "../../pages/BookDetail/BookDetail.scss";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      content: ''
    });
  };
  return (
    <>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Trang chủ
        </Link>
        <FaAngleRight className="breadcrumb-sep" />
        <span className="breadcrumb-current">Liên hệ</span>
      </div>

      <div className="google-map-container">
      <iframe
        title="Bản đồ Đại học Bách Khoa Hà Nội"
        src="https://www.google.com/maps?q=Đại+học+Bách+Khoa+Hà+Nội&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </div>

      <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <div className="icon-container">
            <FaMapMarkerAlt size={20} />
          </div>
          <div className="content">
            <h1>Địa chỉ:</h1>
            <p>Số 1, Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội.</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon-container">
            <FaEnvelope size={20} />
          </div>
          <div className="content">
            <h1>Gửi thắc mắc:</h1>
            <p>G12@gmail.com</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon-container">
            <FaPhone size={20} />
          </div>
          <div className="content"> 
            <h1>Điện thoại:</h1>
            <p>02435146876</p>
          </div>
        </div>
      </div>
      
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Nội dung</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-button">Gửi liên hệ</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
