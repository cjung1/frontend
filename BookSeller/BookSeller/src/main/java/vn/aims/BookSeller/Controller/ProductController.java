package vn.aims.BookSeller.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.aims.BookSeller.Entity.ProductDetailBook;
import vn.aims.BookSeller.Service.BookService;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private BookService bookService;
    @GetMapping("/authors")
    public List<ProductDetailBook> findBookByAuthors(@RequestBody String name){
        return this.bookService.findByAuthors(name);
    }

    @GetMapping("/all")
    public List<ProductDetailBook> findAll(){
        return this.bookService.findAll();
    }
}
