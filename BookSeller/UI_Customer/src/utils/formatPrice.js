

/**
 * Hàm định dạng giá tiền dưới dạng tiền tệ
 * @param {number} price - Giá cần định dạng
 * @param {string} currency - Đơn vị tiền tệ (mặc định là VND)
 * @returns {string} - Giá tiền đã được định dạng
 */
const formatPrice = (price, currency = 'VND') => {
    // Kiểm tra nếu price là số và giá trị hợp lệ
    if (isNaN(price) || price < 0) {
      return 'Invalid price';
    }
  
    // Định dạng giá tiền với dấu phân cách hàng nghìn và thêm đơn vị tiền tệ
    return price
      .toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
      .replace('VND', `${currency}`);
  };
  
  export default formatPrice;
  