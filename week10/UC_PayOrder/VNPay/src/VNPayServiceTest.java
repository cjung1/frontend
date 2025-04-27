import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class VNPayServiceTest {


    @Test
    void testProcessPayment_Success() {
        VNPayService service = new VNPayService();
        PaymentInfo paymentInfo = new PaymentInfo("4111111111111111", "123", "12/23", 50000);
        Invoice invoice = new Invoice("Product 1", 50000, 5000, 55000);

        TransactionResult result = service.processPayment(paymentInfo, invoice);

        assertEquals(TransactionStatus.SUCCESS, result.getStatus());
    }

    @Test
    void testProcessPayment_InvalidPaymentInfo() {
        VNPayService service = new VNPayService();
        PaymentInfo paymentInfo = null;
        Invoice invoice = new Invoice("Product 1", 50000, 5000, 55000);

        assertThrows(IllegalArgumentException.class, () -> {
            service.processPayment(paymentInfo, invoice);
        });
    }

    @Test
    void testCheckTransactionStatus_Success() {
        VNPayService service = new VNPayService();
        String transactionId = "12345";

        TransactionStatus status = service.checkTransactionStatus(transactionId);

        assertEquals(TransactionStatus.SUCCESS, status);
    }

    @Test
    void testCheckTransactionStatus_Failure() {
        VNPayService service = new VNPayService();
        String transactionId = "67890";

        TransactionStatus status = service.checkTransactionStatus(transactionId);

        assertEquals(TransactionStatus.FAILED, status);
    }

    @Test
    void testRefundTransaction_Success() {
        VNPayService service = new VNPayService();
        String transactionId = "12345";
        double amount = 50000;

        TransactionResult result = service.refundTransaction(transactionId, amount);

        assertEquals(TransactionStatus.SUCCESS, result.getStatus());
    }

    @Test
    void testRefundTransaction_InvalidAmount() {
        VNPayService service = new VNPayService();
        String transactionId = "12345";
        double amount = -50000;

        assertThrows(IllegalArgumentException.class, () -> {
            service.refundTransaction(transactionId, amount);
        });
    }
}
