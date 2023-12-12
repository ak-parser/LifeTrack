namespace LifeTrack.Server.DataModels.Users
{
    public class Doctor: Person
    {
        public ICollection<Patient> Patients { get; set; }
    }
}

