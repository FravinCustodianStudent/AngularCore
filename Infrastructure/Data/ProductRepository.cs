using API.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class ProductRepository : IProductRepository
{
    private readonly StoreContext _context;

    public ProductRepository(StoreContext context)
    {
        _context = context;
    }
    public async Task<Product> GetProductByIdAsync(int id)
    {
        return await _context.Products
            .Include(p=>p.ProductType)
            .Include(p=>p.ProductBrand)
            .FirstOrDefaultAsync(i=> i.Id == id);
    }

    public async Task<IReadOnlyList<Product>> GetProductAsync()
    {
        return await _context.Products
            .Include(p=>p.ProductType)
            .Include(p=>p.ProductBrand)
            .ToListAsync();
    }

    public async Task<IReadOnlyList<ProductBrand>> GetBrandsAsync()
    {
        return await _context.ProductBrands.ToListAsync();
    }

    public async Task<IReadOnlyList<ProductType>> GetTypesAsync()
    {
        return await _context.ProductTypes.ToListAsync();
    }
}