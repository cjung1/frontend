package vn.aims.BookSeller.Service;

import org.springframework.security.core.userdetails.UserDetailsService;
import vn.aims.BookSeller.DTO.request.UserUpdateRequest;
import vn.aims.BookSeller.Entity.User;

import java.util.List;
import java.util.Optional;



public interface UserService extends UserDetailsService {
    public User findByUsername(String name);

    public User save(User u);

    public User updateUser(int id, UserUpdateRequest u);

    // Thêm CRUD
    List<User> findAll();
    Optional<User> findById(Integer id);
    void deleteById(Integer id);



}
