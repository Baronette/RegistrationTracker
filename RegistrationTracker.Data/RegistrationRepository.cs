using System.Collections.Generic;
using System.Linq;

namespace CandidateTracker.Data
{
    public class RegistrationRepository
    {
        private readonly string _connection;

        public RegistrationRepository(string connection)
        {
            _connection = connection;
        }
        public Counts GetCounts()
        {
            using var context = new RegistrationContext(_connection);
            return new Counts
            {
                Pending = context.Candidates.Count(c => c.Status == Status.Pending),
                Confirmed = context.Candidates.Count(c => c.Status == Status.Confirmed),
                Declined = context.Candidates.Count(c => c.Status == Status.Declined),
            };
        }
        public void AddPerson(Candidate candidate)
        {
            using var context = new RegistrationContext(_connection);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetByType(Status status)
        {
            using var context = new RegistrationContext(_connection);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }
        public Candidate GetCandidate(int id)
        {
            using var context = new RegistrationContext(_connection);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void UpdateStatus(Status status, int id)
        {
            using var context = new RegistrationContext(_connection);
            context.Candidates.FirstOrDefault(c => c.Id == id).Status = status;
            context.SaveChanges();
        }

    }
}