using LifeTrack.Server.DataModels.Users;
using Newtonsoft.Json;

namespace LifeTrack.Server.DataModels
{
    public class DoctorsDbContext
    {
        public ICollection<Doctor> Doctors { get; set; }
        public DoctorsDbContext() { 
            Doctors = new List<Doctor>();
            InitializeFromFile();
        }

        private void InitializeFromFile()
        {
            string jsonFilePath = "Services\\Data\\DbZahlushki.json";

            if (File.Exists(jsonFilePath))
            {
                string jsonContent = File.ReadAllText(jsonFilePath);
                var doctors = JsonConvert.DeserializeObject<List<Doctor>>(jsonContent);

                Doctors = doctors;
            }
        }
    }
}
