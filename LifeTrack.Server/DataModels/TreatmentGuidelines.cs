namespace LifeTrack.Server.DataModels
{
    public class TreatmentGuidelines
    {
        public string Description { get; set; }
        public ICollection<Medication> MedicationsCollection { get; set; }
    }
}
