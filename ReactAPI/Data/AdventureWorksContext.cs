using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Data.Entities;

namespace ReactAPI.Data
{

    public class AdventureWorksContext : DbContext
    {
        public AdventureWorksContext(DbContextOptions<AdventureWorksContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Address> Address { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Customer> Customer { get; set; }
        // public DbSet<CustomerAddress> CustomerAddress { get; set; }
        // public DbSet<ProductCategory> ProductCategory { get; set; }
        // public DbSet<ProductDescription> ProductDescription { get; set; }
        // public DbSet<ProductModel> ProductModel { get; set; }
        // public DbSet<ProductModelProductDescription> ProductModelProductDescription { get; set; }
        // public DbSet<SalesOrderDetail> SalesOrderDetail { get; set; }
        // public DbSet<SalesOrderHeader> SalesOrderHeader { get; set; }


    }
}