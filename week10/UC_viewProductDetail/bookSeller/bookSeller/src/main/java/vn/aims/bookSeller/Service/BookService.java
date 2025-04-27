package vn.aims.bookSeller.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.aims.bookSeller.Entity.Book;
import vn.aims.bookSeller.Exception.BookException;
import vn.aims.bookSeller.Repository.BookRepo;

@Service
public class BookService {
    @Autowired
    private BookRepo bookRepo; // biến thường, không viết hoa chữ đầu

    public Book getBookById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Product ID must not be null");
        }
        return bookRepo.findById(id)
                .orElseThrow(() -> new BookException("Product not found with ID: " + id));
    }
}

