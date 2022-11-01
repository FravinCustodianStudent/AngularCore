
using API.Errors;
using API.Extensions;
using API.Helpers;
using API.Middleware;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAutoMapper(typeof(MappingProfiles));

builder.Services.AddApplicationServices();

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(x =>x.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddDbContext<AppIdentityDbContext>(x
    => x.UseSqlite(builder.Configuration.GetConnectionString("IdentityConnection")));
builder.Services.AddIdentityService(builder.Configuration);
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerDocumentation();
builder.Services.AddSingleton<IConnectionMultiplexer>(c =>
{
    var configuration = ConfigurationOptions.Parse(
        builder.
        Configuration
        .GetConnectionString("Redis"), true);
    return ConnectionMultiplexer.Connect(configuration);

});
builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwaggerDocumentation();
}

app.UseStatusCodePagesWithReExecute("/errors/{0}");

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "Content")),
    RequestPath = "/content"
});
// app.UseRouting();
// app.UseEndpoints(endpoints =>
// {
//     endpoints.MapControllers();
//     endpoints.MapFallbackToController("Index","Fallback");
// });
app.UseCors("CorsPolicy");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.AddStartData();

await app.RunAsync();
