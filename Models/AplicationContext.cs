using Microsoft.EntityFrameworkCore;

namespace WebGuiaCesar.Models{
    public partial class AplicactionContext : DbContext
    {
        public AplicactionContext(DbContextOptions<AplicactionContext> options):
        base(options){}
    
        public DbSet<GalleryImageResponse> GalleryImage { get; set; }
    }
}