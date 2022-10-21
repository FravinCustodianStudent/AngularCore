using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications;

public class OrderWithItemsAndOrderingSpecification : BaseSpecifcation<Order>
{
    public OrderWithItemsAndOrderingSpecification(string email) : base(o=>o.BuyerEmail == email)
    {
        AddInclude(o=>o.OrderItems);
        AddInclude(o=>o.deliveryMethod);
        AddOrderByDescending(o=>o.OrderDate);
    }

    public OrderWithItemsAndOrderingSpecification(int id,string email)
        : base(o=>o.Id == id && o.BuyerEmail == email)
    {
        AddInclude(o=>o.OrderItems);
        AddInclude(o=>o.deliveryMethod);
    }
}