package vn.aims.BookSeller.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vn.aims.BookSeller.Entity.Product;
import vn.aims.BookSeller.Service.CartItemService;

@RestController
@RequestMapping("/api/cartitem")
public class CartItemController {
    @Autowired
    private CartItemService cartitemservice;
    @PostMapping("/cartitem")
    public void createCartItem(Integer productId,Integer cartId,int quantity){
         cartitemservice.createCartItem(productId,cartId,quantity);
    }
    @PostMapping("/cartitem1")
    public void deleteCartItem(Integer productId,Integer cartId){
        cartitemservice.deleteCartItem(productId,cartId);
    }
    @PostMapping("/cartitem2")
    public void decreaseCartItem(Integer productId,Integer cartId){
        cartitemservice.decreaseCartItem(productId,cartId);
    }
    @PostMapping("/cartitem3")
    public void increaseCartItem(Integer productId,Integer cartId){
        cartitemservice.increaseCartItem(productId,cartId);
    }

    
}
