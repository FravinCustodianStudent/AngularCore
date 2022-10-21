using System.Diagnostics.CodeAnalysis;

namespace Core.Entities.OrderAggregate;

public class Order : BaseEntity
{
    public Order()
    {
        
    }

    public Order( IReadOnlyList<OrderItem> orderItems,string buyerEmail,
        Address shipToAddress, DeliveryMethod deliveryMethod, decimal subtotal)
    {
        BuyerEmail = buyerEmail;
        ShipToAddress = shipToAddress;
        this.deliveryMethod = deliveryMethod;
        OrderItems = orderItems;
        Subtotal = subtotal;
    }

    public string BuyerEmail { get; set; }
    public DateTimeOffset OrderDate { get; set; } = DateTimeOffset.Now;
    public Address ShipToAddress { get; set; }
    public DeliveryMethod deliveryMethod { get; set; }
    public IReadOnlyList<OrderItem> OrderItems { get; set; }
    public decimal Subtotal { get; set; }
    public OrderStatus Status { get; set; } = OrderStatus.Pending;
    [AllowNull]
    public string PaymentIntentId { get; set; }

    public decimal GetTotal()
    {
        return Subtotal + deliveryMethod.Price;
    }
}
