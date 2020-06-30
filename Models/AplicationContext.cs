using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebGuiaCesar.Models{
    public partial class AplicactionContext : DbContext
    {
        public AplicactionContext(DbContextOptions<AplicactionContext> options):
        base(options){}
    
        public DbSet<GalleryImageResponse> GalleryImageResponse { get; set; }
    }
}