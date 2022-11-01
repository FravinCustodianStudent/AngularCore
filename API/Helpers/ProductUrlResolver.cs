﻿using API.Dtos;

using AutoMapper;
using Core.Entities;

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
        var photo = source.Photos.FirstOrDefault(x => x.IsMain);
        if(photo != null)
        {
            return _config["ApiUrl"] + photo.PictureUrl;
        }

        return null;
    }
}