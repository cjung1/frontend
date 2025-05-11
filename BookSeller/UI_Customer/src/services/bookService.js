const sampleBooks = [
  {
    id: 1,
    title: "Dế Mèn Phiêu Lưu Ký",
    price: 50000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    title: "Harry Potter và Hòn Đá Phù Thủy",
    price: 120000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    title: "Lão Hạc",
    price: 35000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    title: "Tấm Cám",
    price: 40000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    title: "Văn Học Việt Nam",
    price: 90000,
    image: "https://via.placeholder.com/200",
  },
];

// Hàm lấy tất cả sách
export const getBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleBooks);
    }, 1000); // Giả lập thời gian chờ để lấy dữ liệu (mock data)
  });
};

// Hàm lấy thông tin sách theo ID
export const getBookById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = sampleBooks.find((book) => book.id === id);
      if (book) {
        resolve(book);
      } else {
        reject("Book not found");
      }
    }, 1000);
  });
};
