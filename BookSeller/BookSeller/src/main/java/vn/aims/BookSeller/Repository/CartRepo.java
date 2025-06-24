package vn.aims.BookSeller.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import vn.aims.BookSeller.Entity.Cart;
import java.util.List;

public interface CartRepo extends JpaRepository<Cart,Integer> {

    public List<Cart> findByCartId(Integer cartId);
}
