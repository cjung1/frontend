public class Product {
    private String name;
    private int stock;

    public Product(String name, int stock) {
        this.name = name;
        this.stock = stock;
    }

    public boolean hasEnoughStock(int quantity) {
        return stock >= quantity;
    }

    public void reduceStock(int quantity) {
        stock -= quantity;
    }

    public int getStock() {
        return stock;
    }

    public String getName() {
        return name;
    }
}