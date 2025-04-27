public class Invoice {
    private String productName;
    private double productPrice;
    private double shippingFee;
    private double totalAmount;

    public Invoice(String productName, double productPrice, double shippingFee, double totalAmount) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.shippingFee = shippingFee;
        this.totalAmount = totalAmount;
    }

    // Getters và setters
    public String getProductName() {
        return productName;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public double getShippingFee() {
        return shippingFee;
    }

    public double getTotalAmount() {
        return totalAmount;
    }
}
