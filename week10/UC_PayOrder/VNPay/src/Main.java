public class Main {

    public static void main(String[] args) {
        VNPayServiceTest test = new VNPayServiceTest();

        // Chạy các test
        test.testProcessPayment_Success();
        test.testProcessPayment_InvalidPaymentInfo();
        test.testCheckTransactionStatus_Success();
        test.testCheckTransactionStatus_Failure();
        test.testRefundTransaction_Success();
        test.testRefundTransaction_InvalidAmount();

        System.out.println("All tests executed.");
    }
}
