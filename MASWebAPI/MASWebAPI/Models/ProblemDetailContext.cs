using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MASWebAPI.Models
{
    public class ProblemDetailContext:DbContext
    {
        public ProblemDetailContext(DbContextOptions<ProblemDetailContext> options):base(options)
        {

        }
        public DbSet<ProblemDetail> ProblemDetails { get; set; }
    }
}
