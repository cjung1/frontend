package vn.aims.BookSeller.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.aims.BookSeller.Entity.User;


import java.util.List;


public interface UserRepo extends JpaRepository<User, Integer> {
    public User findByUsername(String username);

    public List<User> findAll();

    public boolean existsByEmail(String email);


}