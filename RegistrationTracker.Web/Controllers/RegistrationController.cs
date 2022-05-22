using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RegistrationTracker.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RegistrationTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private string _connection;
        public RegistrationController(IConfiguration configuration)
        {
            _connection = configuration.GetConnectionString("ConStr");
        }

        [Route("getcounts")]
        public Counts GetCounts()
        {
            var repo = new RegistrationRepository(_connection);
            return repo.GetCounts();
        }
        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new RegistrationRepository(_connection);
            repo.AddPerson(candidate);
        }
        [Route("getbytype")]
        public List<Candidate> GetByType(Status status)
        {
            var repo = new RegistrationRepository(_connection);
            return repo.GetByType(status);
        }
        [Route("getcandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new RegistrationRepository(_connection);
            return repo.GetCandidate(id);
        }
        [HttpPost]
        [Route("updatastatus")]
        public void UpdateStatus(StatusViewModel svm)
        {
            var repo = new RegistrationRepository(_connection);
            repo.UpdateStatus(svm.Status, svm.Id);
        }
    }
}
