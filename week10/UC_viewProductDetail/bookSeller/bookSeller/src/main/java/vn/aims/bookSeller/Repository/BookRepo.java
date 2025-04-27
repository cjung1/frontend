package vn.aims.bookSeller.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import vn.aims.bookSeller.Entity.Book;

public interface BookRepo extends JpaRepository<Book, Long> {

}
