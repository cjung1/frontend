package vn.aims.BookSeller.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import vn.aims.BookSeller.Entity.CartItem;

@Repository
public class CartItemRepo {
    
    @PersistenceContext
    private EntityManager entityManager;
    @Transactional
    public void insertCartItem(Integer productId,Integer cartId,Integer quantity){
        entityManager.createNativeQuery("insert into schema.cart_item (cart_id,product_id,quantity) values(?,?,?)")
        .setParameter(1, cartId)
        .setParameter(2, productId)
        .setParameter(3, quantity)
        .executeUpdate();
    }
    // them mot cart itemvao gio hang 
    @Transactional
    public void deleteCartItem(Integer productId,Integer cartId){
        entityManager.createNativeQuery("delete from schema.cart_item where product_id = ? and cart_id = ?")
        .setParameter(1, productId)
        .setParameter(2, cartId)
        .executeUpdate();
    }
    @Transactional
    public void changeCartItem(Integer productId,Integer cartId,Integer quantity){
        entityManager.createNativeQuery("update schema.cart_item set quantity = ? where product_id = ? and cart_id = ?")
        .setParameter(1, quantity)
        .setParameter(2, productId)
        .setParameter(3, cartId)
        .executeUpdate();
    }
    @Transactional
    public void decreaseCartItem(Integer productId,Integer cartId){
        entityManager.createNativeQuery("update schema.cart_item set quantity = quantity - 1 where product_id =? and cart_id = ?")
        .setParameter(1, productId)
        .setParameter(2, cartId)
        .executeUpdate();
    }
    @Transactional
    public void increaseCartItem(Integer productId,Integer cartId){
        entityManager.createNativeQuery("update schema.cart_item set quantity = quantity + 1 where cart_id = ? and product_id = ?")
        .setParameter(1, cartId)
        .setParameter(2, productId)
        .executeUpdate();
    }
    

}
