using LifeTrack.Server.DataModels.Metrics;

namespace LifeTrack.Server.DataModels.Users
{
    public class Patient: Person
    {
        public Diagnosis DiagnosisValue { get; set; }
        public List<HealthMetric> HealthMetricsCollection { get; set; } = new();
    }
}
