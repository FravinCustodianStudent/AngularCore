using Microsoft.OpenApi.Models;

namespace API.Extensions;

public static class SwaggerServiceExtensions
{
    public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection Services)
    {
        Services.AddSwaggerGen(c =>
        {
            var securityScheme = new OpenApiSecurityScheme
            {
                Description = "JWT Auth Bearer Scheme",
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.Http,
                Scheme = "bearer",
                Reference = new OpenApiReference()
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            };
            
            c.AddSecurityDefinition("Bearer",securityScheme);
            var securityRequirement = new OpenApiSecurityRequirement()
            {
                {securityScheme, new[]
                {
                    "Bearer"
                }}
            };
            c.AddSecurityRequirement(securityRequirement);
        });
        return Services;
    }

    public static IApplicationBuilder UseSwaggerDocumentation(this IApplicationBuilder app)
    {
        app.UseSwagger();
        app.UseSwaggerUI();
        return app;
    }
}