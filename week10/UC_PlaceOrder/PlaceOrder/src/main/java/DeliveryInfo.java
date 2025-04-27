public class DeliveryInfo {
    private String name;
    private String email;
    private String phone;
    private String city;
    private String address;

    public DeliveryInfo(String name, String email, String phone, String city, String address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.address = address;
    }

    public boolean isValid() {
        return name != null && !name.isEmpty()
                && email != null && !email.isEmpty()
                && phone != null && !phone.isEmpty()
                && city != null && !city.isEmpty()
                && address != null && !address.isEmpty();
    }

    public String getEmail() {
        return email;
    }
}