﻿using API.Dtos;
using API.Entities;
using AutoMapper;

namespace API.Helpers;

public class ProductUrlResolver : IValueResolver<Product,ProductToReturnDto,string>
{
    private readonly IConfiguration _config;

    public ProductUrlResolver(IConfiguration configuration)
    {
        _config = configuration;
    }
    public string Resolve(Product source, ProductToReturnDto destination, string destMember, ResolutionContext context)
    {
        if (!string.IsNullOrWhiteSpace(source.PictureUrl))
        {
            return _config["ApiUrl"] + source.PictureUrl;
        }

        return null;
    }
}