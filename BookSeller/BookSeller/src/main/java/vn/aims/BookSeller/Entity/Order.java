package vn.aims.BookSeller.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Entity
@Data
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;

    // Quan hệ nhiều đơn hàng thuộc 1 user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = true)  // nullable nếu khách không đăng ký
    private User user;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "province_city")
    private String provinceCity;

    @Column(name = "rush_order")
    private Boolean rushOrder;

    @Column(name = "rush_time")
    private LocalTime rushTime;

    @Column(name = "rush_instruction")
    private String rushInstruction;

    @Column(name = "delivery_fee")
    private BigDecimal deliveryFee;

    @Column(name = "vat_fee")
    private BigDecimal vatFee;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @Column(name = "final_amount")
    private BigDecimal finalAmount;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems;

    // Getters and Setters ...
}

