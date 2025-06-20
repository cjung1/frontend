package vn.aims.BookSeller.Controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import vn.aims.BookSeller.DTO.request.UserCreationDTO;
import vn.aims.BookSeller.DTO.request.UserUpdateRequest;
import vn.aims.BookSeller.Entity.Cart;
import vn.aims.BookSeller.Entity.User;
import vn.aims.BookSeller.Repository.UserRepo;
import vn.aims.BookSeller.Service.EmailService;
import vn.aims.BookSeller.Service.UserServiceImpl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private EmailService emailService;
    @Autowired
    private UserServiceImpl userService;
    @Autowired

    private PasswordEncoder passwordEncoder;
//    @PostMapping("/register")
//    public ResponseEntity<?> register(@RequestBody User user) {
//        if (userRepo.existsByEmail(user.getEmail())) {
//            return ResponseEntity.badRequest().body("Email already used");
//        }
//
//        userRepo.save(user);
//        emailService.sendRegistrationEmail(user.getEmail(), user.getUsername());
//
//        return ResponseEntity.ok("Registered successfully. Please check your email!");
//    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserCreationDTO dto) {
        if (userRepo.existsByEmail(dto.getEmail())) {
            return ResponseEntity.badRequest().body("Email already in use");
        }

        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(passwordEncoder.encode(dto.getPassword())); // hash password
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());
        user.setCreated_at(LocalDateTime.now());


        userRepo.save(user);
        emailService.sendRegistrationEmail(user.getEmail(), user.getUsername());
        Cart cart = new Cart();
        cart.setSessionId(UUID.randomUUID().toString());
        cart.setUser(user);

        user.setCart(cart); // Gán lại cho chiều ngược
        userRepo.save(user); // Hibernate sẽ cascade lưu luôn cart


        return ResponseEntity.ok("Registered successfully!");
    }

    @GetMapping("/{id}")
    public List<User> findById(@PathVariable int id){
        return this.userRepo.findById(id);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody UserUpdateRequest userUpdateRequest){
        try{
        return this.userService.updateUser(id, userUpdateRequest);}
        catch (Exception e){
            return null;
        }
    }

}
