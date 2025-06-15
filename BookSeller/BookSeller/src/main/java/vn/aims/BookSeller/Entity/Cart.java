package vn.aims.BookSeller.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Integer cartId;

    @Column(name = "session_id", nullable = false, unique = true)
    private String sessionId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    private List<CartItem> cartItems;

    @OneToOne
    @JoinColumn(name = "user_id", unique = true)  // user_id nullable nếu có khách ko đăng nhập
    private User user;

    // Getters and Setters ...
}


