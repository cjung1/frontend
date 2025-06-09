package vn.aims.BookSeller.Entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "payment_transaction")
public class PaymentTransaction {

    @Id
    @Column(name = "transaction_id")
    private String transactionId;

    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    private Order order;

    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "content")
    private String content;

    @Column(name = "datetime")
    private LocalDateTime datetime;

    @Column(name = "status")
    private String status;

    // Getters and Setters ...
}

