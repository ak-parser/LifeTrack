using LifeTrack.Server.DataModels.Users;
using Microsoft.AspNetCore.Mvc;

namespace LifeTrack.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DoctorController : ControllerBase
    {
        private readonly DbContext _dbContext;
        private readonly ILogger<DoctorController> _logger;

        public DoctorController(DbContext dbContext, ILogger<DoctorController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Doctor> GetDoctors()
        {
            _logger.LogInformation("Get doctors");

            var doctors = _dbContext.Doctors;

            return doctors;
        }

        [HttpGet("{id}")]
        public ActionResult<Doctor?> GetDoctor(int id)
        {
            _logger.LogInformation("Get doctor by id");

            var doctor = _dbContext.Doctors.FirstOrDefault(x => x.Id == id);

            if (doctor is null)
            {
                return NotFound();
            }

            return doctor;
        }
    }
}
