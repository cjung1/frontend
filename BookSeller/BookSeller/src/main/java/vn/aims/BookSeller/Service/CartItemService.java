package vn.aims.BookSeller.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import vn.aims.BookSeller.Entity.Product;
import vn.aims.BookSeller.Repository.ProductRepo;
import vn.aims.BookSeller.Repository.CartItemRepo;
@Service
public class CartItemService {
    
    @Autowired
    private CartItemRepo cartitemRepo;

    @Autowired
    private ProductRepo productRepo;

    public void createCartItem(Integer productId,Integer cartId,int quantity){


            // nếu quantity bé hơn số lượng hàng tồn kho thì sẽ đặt hàng được
            if(quantity < productRepo.findByProductId(productId).getQuantity()){
                cartitemRepo.insertCartItem(cartId, productId,quantity);
        }
        

    }
    public void deleteCartItem(Integer productId,Integer cartId){
        cartitemRepo.deleteCartItem(productId, cartId);
    }
    
     public void decreaseCartItem(Integer productId,Integer cartId){
         cartitemRepo.decreaseCartItem(productId,cartId);
     }
     public void increaseCartItem(Integer productId,Integer cartId){
        cartitemRepo.increaseCartItem(productId, cartId);
     }

    
}
