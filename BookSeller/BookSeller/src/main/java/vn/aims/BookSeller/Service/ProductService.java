package vn.aims.BookSeller.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.aims.BookSeller.Repository.ProductRepo;
import vn.aims.BookSeller.Entity.Product;
@Service
public class ProductService {
    

    @Autowired
    private ProductRepo productRepo;

    public Product findByProductId(Integer productId){
        return productRepo.findByProductId(productId);
    }
}
