package vn.aims.BookSeller.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.aims.BookSeller.Entity.ProductDetailBook;
import vn.aims.BookSeller.Service.BookService;
import vn.aims.BookSeller.Service.ProductService;
import vn.aims.BookSeller.Entity.Product;
import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private BookService bookService;

    @Autowired
    private ProductService productService;
    @GetMapping("/authors")
    public List<ProductDetailBook> findBookByAuthors(@RequestBody String name){
        return this.bookService.findByAuthors(name);
    }

    @GetMapping("/all")
    public List<ProductDetailBook> findAll(){
        return this.bookService.findAll();
    }
    @GetMapping("/{product_id}")
    public Product findByProductId(@PathVariable(value="product_id") Integer productId){
        return this.productService.findByProductId(productId);
    }
}
