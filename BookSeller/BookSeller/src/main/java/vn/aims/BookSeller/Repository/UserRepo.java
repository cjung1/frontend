package vn.aims.BookSeller.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.aims.BookSeller.DTO.request.UserUpdateRequest;
import vn.aims.BookSeller.Entity.User;


import java.util.List;


public interface UserRepo extends JpaRepository<User, Integer> {

    public List<User> findById(int id);
    public User findByUsername(String username);

    public List<User> findAll();

    public boolean existsByEmail(String email);




}