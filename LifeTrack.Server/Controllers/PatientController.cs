using LifeTrack.Server.DataModels.Users;
using Microsoft.AspNetCore.Mvc;

namespace LifeTrack.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly DbContext _dbContext;
        private readonly ILogger<DoctorController> _logger;

        public PatientController(DbContext dbContext, ILogger<DoctorController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet("{id}")]
        public Patient? GetPatient(int id)
        {
            _logger.LogInformation("Get patient by id");

            var patient = _dbContext.Doctors.SelectMany(d => d.Patients).FirstOrDefault(p => p.Id == id);

            return patient;
        }

        [HttpGet("doctor/{id}")]
        public ActionResult<IEnumerable<Patient>> GetPatientsByDoctor(int id, [FromQuery] string? search)
        {
            _logger.LogInformation("Get patients by doctor");

            var doctor = _dbContext.Doctors.FirstOrDefault(x => x.Id == id);
            if (doctor is null)
            {
                return NotFound();
            }

            return Ok(doctor.Patients.Where(x => (x.Name + x.Surname + x.Patronymic).Contains(search ?? "", StringComparison.OrdinalIgnoreCase)));
        }
    }
}
