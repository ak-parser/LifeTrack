using LifeTrack.Server.DataModels.Metrics;

namespace LifeTrack.Server.DataModels.Users
{
    public class Patient: Person
    {
        public Diagnosis DiagnosisValue { get; set; }
        public ICollection<HealthMetric> HealthMetricsCollection { get; set; }
        public Patient() { 
            HealthMetricsCollection = new List<HealthMetric>();
        }
    }
}
