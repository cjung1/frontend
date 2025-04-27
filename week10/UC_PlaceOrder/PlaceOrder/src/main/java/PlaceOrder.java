import java.util.ArrayList;
import java.util.List;

public class PlaceOrder {

    public boolean placeOrder(Cart cart, DeliveryInfo info, PaymentInfo payment) {
        if (cart == null || cart.isEmpty()) {
            return false;
        }
        if (info == null || !info.isValid()) {
            return false;
        }
        if (payment == null || !payment.isValid()) {
            return false;
        }

        for (CartItem item : cart.getItems()) {
            if (!item.getProduct().hasEnoughStock(item.getQuantity())) {
                return false;
            }
        }

        for (CartItem item : cart.getItems()) {
            item.getProduct().reduceStock(item.getQuantity());
        }

        System.out.println("Order placed successfully. Email sent to " + info.getEmail());
        return true;
    }

    public static void main(String[] args) {
        PlaceOrder placeOrder = new PlaceOrder();
        
        Product book1 = new Product("House of the Dragons", 15);
        Product book2 = new Product("The Wind of Winter", 8);
        
        List<CartItem> items = new ArrayList<>();
        items.add(new CartItem(book1, 2));
        items.add(new CartItem(book2, 1));
        
        Cart cart = new Cart();
        for (CartItem item : items) {
            cart.addItem(item.getProduct(), item.getQuantity());
        }
        
        DeliveryInfo deliveryInfo = new DeliveryInfo(
            "Bui Viet Hung",
            "buiviethung261104@gmail.com",
            "0345929208",
            "Ha Noi",
            "Hoai Duc"
        );
        
        PaymentInfo paymentInfo = new PaymentInfo("1234567890123456");
        
        boolean success = placeOrder.placeOrder(cart, deliveryInfo, paymentInfo);
        System.out.println("Order placement " + (success ? "succeeded" : "failed"));
        
        System.out.println("\nFinal stock levels:");
        System.out.println(book1.getName() + ": " + book1.getStock());
        System.out.println(book2.getName() + ": " + book2.getStock());
    }
} 