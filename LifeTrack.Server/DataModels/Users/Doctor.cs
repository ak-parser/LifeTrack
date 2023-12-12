namespace LifeTrack.Server.DataModels.Users
{
    public class Doctor: Person
    {
        public string Speciality { get; set; }
        public ICollection<Patient> Patients { get; set; }
    }
}

