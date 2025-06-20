package vn.aims.BookSeller.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.aims.BookSeller.Entity.ProductDetailBook;

import java.util.List;

public interface BookRepo extends JpaRepository<ProductDetailBook, Integer>  {

    @Query("SELECT p FROM ProductDetailBook p WHERE p.authors = ?1")
    public List<ProductDetailBook> findByAuthors(String name);



    public List<ProductDetailBook> findAll();
}
