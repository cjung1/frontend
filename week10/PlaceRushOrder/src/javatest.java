import junit.framework.TestCase;

public class TestPlaceRushOrder extends TestCase(){
    List<Item>items = {};
    public void testGetTotalPrice(){
        PlaceRushOrder p = new PlaceRushOrder(items)
        assertEquals("1000",p.getTotalPrice(items));
    }
    public void testTime(){
        PlaceRushOrder p = new PlaceRushOrder(items);
        List<int>time = {};
        assertEquals(time,p.Time(items));
    }
    public void testPriceTrans(){
        PlaceRushOrder p = new PlaceRushOrder(items);
        assertEquals("1500",p.PriceTrans(items));
    }
}