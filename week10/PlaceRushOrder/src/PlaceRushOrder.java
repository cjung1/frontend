import java.util.ArrayList;
import java.util.List;
import User;
import Item;
public class PlaceRushOrder(){

    public PlaceRushOrder(List<Item>items){
        this.items = items
    }
    public PlaceRushOrder(List<Item>items,totalPrice){
        this.items = items
        this.totalPrice = totalPrice;
    }
    public List<Item> items;
    public int totalPrice;
    // phuong thuc nay de tinh tong so tien ma nguoi mua phai tra cho don hang 
    puclic int GetTotalPrice(List<Item> items){
        for(int i = 0;i < items.size();i ++){
            totalPrice += items[i].price;
            if(items[i].placerushorder){
                totalPrice += (items[i].price / 10);
            }
        }
        return totalPrice + priceTrans(items);
    }
    // phuong thuc nay de tinh thoi gian de van chuyen hang den noi cua nguoi nhan
    public List<int> Time(List<Item>items){
        List<int> timeitem = new ArrayList<int>();
        for(int i = 0;i < items.size();i ++){
            timeitem.add(user.position - items[i].position);
        }
        return timeitem;
    }
    public int PriceTrans(List<Item>items){
        int a = 0;
        for(int i = 0;i < items.size();i ++){
            a += (user.position - items.position) * 10;
        }
        return a;
    }
}