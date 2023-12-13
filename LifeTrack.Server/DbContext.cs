using LifeTrack.Server.DataModels.Users;
using Newtonsoft.Json;

namespace LifeTrack.Server
{
    public class DbContext
    {
        public List<Doctor> Doctors { get; set; } = [];

        public DbContext()
        {
            InitializeFromFile();
        }

        private void InitializeFromFile()
        {
            string jsonFilePath = "Services\\Data\\DbZahlushki.json";

            if (File.Exists(jsonFilePath))
            {
                string jsonContent = File.ReadAllText(jsonFilePath);
                var doctors = JsonConvert.DeserializeObject<List<Doctor>>(jsonContent);

                if (doctors is not null)
                {
                    Doctors = doctors;
                }
            }
        }
    }
}
