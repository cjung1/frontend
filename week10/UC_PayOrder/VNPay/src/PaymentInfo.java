public class PaymentInfo {
    private String cardNumber;
    private String cvv;
    private String expirationDate;
    private double amount;

    public PaymentInfo(String cardNumber, String cvv, String expirationDate, double amount) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expirationDate = expirationDate;
        this.amount = amount;
    }

    // Getters và setters
    public String getCardNumber() {
        return cardNumber;
    }

    public String getCvv() {
        return cvv;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public double getAmount() {
        return amount;
    }
}
