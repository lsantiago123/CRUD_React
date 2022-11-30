using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ReactAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactJSConecction",
    policy => policy.WithOrigins("http://localhost:3000/")
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowAnyOrigin()
    );
});

builder.Services.AddDbContext<AdventureWorksContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ReactJSConecction"),
    sqlServerOptionsAction: sqlOptions =>
    {
        sqlOptions.EnableRetryOnFailure();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("ReactJSConecction");

app.UseAuthorization();

app.MapControllers();

app.Run();
