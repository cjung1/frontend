package vn.aims.BookSeller.Repository;


import org.springframework.data.jpa.repository.JpaRepository;


import vn.aims.BookSeller.Entity.Product;


public interface ProductRepo extends JpaRepository<Product,Integer> {
    public Product findByProductId(Integer productId);
    

}
