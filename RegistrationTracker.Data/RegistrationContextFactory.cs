using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace CandidateTracker.Data
{
    public class RegistrationContextFactory : IDesignTimeDbContextFactory<RegistrationContext>
    {
        public RegistrationContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}RegistrationTracker.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new RegistrationContext(config.GetConnectionString("ConStr"));
        }
    }
}
