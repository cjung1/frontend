package vn.aims.BookSeller.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.aims.BookSeller.Entity.ProductDetailBook;
import vn.aims.BookSeller.Repository.BookRepo;

import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepo bookRepo;

    public List<ProductDetailBook> findByAuthors(String name){
        return bookRepo.findByAuthors(name);
    }

    public List<ProductDetailBook> findAll(){
        return bookRepo.findAll();
    }

}
