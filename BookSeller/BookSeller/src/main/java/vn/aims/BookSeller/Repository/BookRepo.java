package vn.aims.BookSeller.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.aims.BookSeller.Entity.ProductDetailBook;

import java.util.List;

public interface BookRepo extends JpaRepository<ProductDetailBook, Integer>  {
    public List<ProductDetailBook> findByAuthors(String name);

    public List<ProductDetailBook> findAll();
}
