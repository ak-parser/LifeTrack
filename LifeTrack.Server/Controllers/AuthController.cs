using LifeTrack.Server.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace LifeTrack.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly DbContext _dbContext;
        private readonly ILogger<DoctorController> _logger;

        public AuthController(DbContext dbContext, ILogger<DoctorController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpPost("signIn")]
        public async Task<ActionResult<int>> SignIn(AuthModel authModel)
        {
            _logger.LogInformation("Sign in");

            var doctor = _dbContext.Doctors.FirstOrDefault(x => x.Email == authModel.Email);

            if (doctor is null)
            {
                return Unauthorized();
            }

            return doctor.Id;
        }
    }
}
