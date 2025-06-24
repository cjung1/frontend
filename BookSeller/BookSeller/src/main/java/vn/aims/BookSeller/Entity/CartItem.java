package vn.aims.BookSeller.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_item")
@IdClass(CartItemId.class)
public class CartItem {

    @Id
    @ManyToOne
    @JoinColumn(name = "cart_id", referencedColumnName = "cart_id")
    private Cart cart;

    @Id
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    // Getters and Setters ...

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}

