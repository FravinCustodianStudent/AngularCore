using System.ComponentModel.DataAnnotations;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Dtos;

public class CustomerBasketDto
{
    [Required]
    public string Id { get; set; }
    
    public List<BasketItemDto> Items { get; set; } = new List<BasketItemDto>();
}