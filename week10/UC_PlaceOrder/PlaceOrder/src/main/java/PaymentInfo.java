public class PaymentInfo {
    private String creditCardNumber;

    public PaymentInfo(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    public boolean isValid() {
        return creditCardNumber != null && creditCardNumber.length() == 16;
    }
}