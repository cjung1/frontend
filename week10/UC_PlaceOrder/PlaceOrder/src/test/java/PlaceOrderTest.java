import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PlaceOrderTest {

    private OrderService orderService;
    private Product product;

    @BeforeEach
    public void setUp() {
        orderService = new OrderService();
    }

    @Test
    public void testEmptyCart() {
        Cart emptyCart = new Cart();
        DeliveryInfo info = new DeliveryInfo("Hung", "hung@gmail.com", "0123456789", "Hà Nội", "123 phố X");
        PaymentInfo payment = new PaymentInfo("1234567812345678");

        boolean result = orderService.placeOrder(emptyCart, info, payment);
        assertFalse(result, "Should not place order with empty cart");
    }

    @Test
    public void testInsufficientStock() {
        Cart cart = new Cart();
        product = new Product("Book", 2);
        cart.addItem(product, 5);

        DeliveryInfo info = new DeliveryInfo("Hung", "hung@gmail.com", "0123456789", "Hà Nội", "123 phố X");
        PaymentInfo payment = new PaymentInfo("1234567812345678");

        boolean result = orderService.placeOrder(cart, info, payment);
        assertFalse(result, "Should not place order when stock is insufficient");
    }

    @Test
    public void testMissingDeliveryInfo() {
        Cart cart = new Cart();
        product = new Product("CD", 10);
        cart.addItem(product, 2);

        DeliveryInfo info = new DeliveryInfo("", "hung@gmail.com", "0123456789", "Hà Nội", "123 phố X");
        PaymentInfo payment = new PaymentInfo("1234567812345678");

        boolean result = orderService.placeOrder(cart, info, payment);
        assertFalse(result, "Should not place order with missing delivery info");
    }

    @Test
    public void testValidOrder() {
        Cart cart = new Cart();
        product = new Product("DVD", 10);
        cart.addItem(product, 2);

        DeliveryInfo info = new DeliveryInfo("Hung", "hung@gmail.com", "0123456789", "Hà Nội", "123 phố X");
        PaymentInfo payment = new PaymentInfo("1234567812345678");

        boolean result = orderService.placeOrder(cart, info, payment);
        assertTrue(result, "Valid order should succeed");
    }

    @Test
    public void testSuccessfulPaymentAndStockUpdate() {
        Cart cart = new Cart();
        product = new Product("LP", 5);
        cart.addItem(product, 2);

        DeliveryInfo info = new DeliveryInfo("Hung", "hung@gmail.com", "0123456789", "Hà Nội", "123 phố X");
        PaymentInfo payment = new PaymentInfo("1234567812345678");

        boolean result = orderService.placeOrder(cart, info, payment);
        assertTrue(result, "Order should succeed with valid payment");
        assertEquals(3, product.getStock(), "Stock should be reduced after successful order");
    }
}