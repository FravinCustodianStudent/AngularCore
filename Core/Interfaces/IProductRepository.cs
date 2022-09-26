using API.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<Product> GetProductByIdAsync(int id);
    Task<IReadOnlyList<Product>> GetProductAsync();
    Task<IReadOnlyList<ProductBrand>> GetBrandsAsync();
    Task<IReadOnlyList<ProductType>> GetTypesAsync();
    
}