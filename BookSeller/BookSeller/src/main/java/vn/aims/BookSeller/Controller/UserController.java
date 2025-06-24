package vn.aims.BookSeller.Controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.aims.BookSeller.DTO.request.UserCreationDTO;
import vn.aims.BookSeller.Entity.User;
import vn.aims.BookSeller.Repository.UserRepo;
import vn.aims.BookSeller.Service.EmailService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private EmailService emailService;
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


        userRepo.save(user);
        emailService.sendRegistrationEmail(user.getEmail(), user.getUsername());

        return ResponseEntity.ok("Registered successfully!");
    }

}
