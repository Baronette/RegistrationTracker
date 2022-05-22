using Microsoft.EntityFrameworkCore;

namespace CandidateTracker.Data
{
    public class RegistrationContext: DbContext
    {
        private readonly string _connectionString;

        public RegistrationContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<Candidate> Candidates { get; set; }

    }
}
