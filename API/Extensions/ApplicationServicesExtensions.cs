
using API.Errors;
using Core.Entities.Identity;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Identity;
using Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Extensions;

public static class ApplicationServicesExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection Services)
    {
        Services.AddSingleton<IResponseCacheService, ResponseCacheService>();
        Services.AddScoped<IUnitOfWork, UnitOfWork>();
        Services.AddScoped<ITokenService, TokenService>();
        Services.AddScoped<IOrderService, OrderService>();
        Services.AddScoped<IPaymentService, PaymentService>();
        Services.AddScoped<IProductRepository, ProductRepository>();
        Services.AddScoped<IBasketRepository, BasketRepository>();
        Services.AddScoped(typeof(IGenericRepository<>),(typeof(GenericRepository<>)));
        Services.AddScoped<IPhotoService, PhotoService>();
        
        Services.Configure<ApiBehaviorOptions>(options =>
        {
            options.InvalidModelStateResponseFactory = actionContext =>
            {
                var errors = actionContext.ModelState
                    .Where(e => e.Value.Errors.Count > 0)
                    .SelectMany(x => x.Value.Errors)
                    .Select(x => x.ErrorMessage).ToArray();
                var errorResponse = new ApiValidationErrorResponse
                {
                    Errors = errors
                };
                return new BadRequestObjectResult(errorResponse);
            };
        });

        return Services;
    }
}