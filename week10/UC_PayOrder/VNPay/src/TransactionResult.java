public class TransactionResult {
    private TransactionStatus status;
    private String message;

    public TransactionResult(TransactionStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    // Getters và setters
    public TransactionStatus getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
}
