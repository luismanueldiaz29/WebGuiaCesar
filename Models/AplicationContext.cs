using Microsoft.EntityFrameworkCore;

namespace WebGuiaCesar.Models{
    public partial class AplicactionContext : DbContext
    {
        public AplicactionContext(DbContextOptions<AplicactionContext> options):
        base(options){}
    
        //public Microsoft.EntityFrameworkCore.DbSet<Image> Images { get; set; }
    }
}