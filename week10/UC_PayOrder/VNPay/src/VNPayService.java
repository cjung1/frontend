public class VNPayService {

    // Phương thức xử lý thanh toán
    public TransactionResult processPayment(PaymentInfo paymentInfo, Invoice invoice) {
        if (paymentInfo == null || invoice == null) {
            throw new IllegalArgumentException("Thông tin thanh toán hoặc hóa đơn không hợp lệ");
        }

        // Giả sử phương thức này gửi yêu cầu thanh toán và nhận kết quả
        boolean isPaymentSuccess = processPaymentGateway(paymentInfo, invoice);

        if (isPaymentSuccess) {
            return new TransactionResult(TransactionStatus.SUCCESS, "Thanh toán thành công");
        } else {
            return new TransactionResult(TransactionStatus.FAILED, "Thanh toán thất bại");
        }
    }

    // Phương thức kiểm tra trạng thái giao dịch
    public TransactionStatus checkTransactionStatus(String transactionId) {
        if (transactionId == null || transactionId.isEmpty()) {
            throw new IllegalArgumentException("Mã giao dịch không hợp lệ");
        }

        // Giả sử kiểm tra trạng thái giao dịch từ hệ thống VNPay
        TransactionStatus status = getTransactionStatus(transactionId);

        if (status == null) {
            throw new TransactionNotFoundException("Giao dịch không tồn tại");
        }

        return status;
    }

    // Phương thức hoàn tiền
    public TransactionResult refundTransaction(String transactionId, double amount) {
        if (transactionId == null || transactionId.isEmpty()) {
            throw new IllegalArgumentException("Mã giao dịch không hợp lệ");
        }

        if (amount <= 0) {
            throw new IllegalArgumentException("Số tiền hoàn không hợp lệ");
        }

        // Giả sử hoàn tiền qua hệ thống VNPay
        boolean isRefundSuccess = processRefund(transactionId, amount);

        if (isRefundSuccess) {
            return new TransactionResult(TransactionStatus.SUCCESS, "Hoàn tiền thành công");
        } else {
            return new TransactionResult(TransactionStatus.FAILED, "Hoàn tiền thất bại");
        }
    }

    // Giả lập phương thức thanh toán qua cổng VNPay
    private boolean processPaymentGateway(PaymentInfo paymentInfo, Invoice invoice) {
        // Giả sử đây là quá trình xử lý thanh toán với cổng VNPay
        return true;  // Giả sử thanh toán luôn thành công
    }

    // Giả lập phương thức kiểm tra trạng thái giao dịch
    private TransactionStatus getTransactionStatus(String transactionId) {
        // Giả sử có 2 trạng thái: thành công và thất bại
        if ("12345".equals(transactionId)) {
            return TransactionStatus.SUCCESS;
        } else if ("67890".equals(transactionId)) {
            return TransactionStatus.FAILED;
        }
        return null;
    }

    // Giả lập phương thức hoàn tiền
    private boolean processRefund(String transactionId, double amount) {
        // Giả sử hoàn tiền luôn thành công
        return true;
    }
}
