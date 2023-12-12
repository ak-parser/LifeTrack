namespace LifeTrack.Server.DataModels.Metrics
{
    public class HealthMetric
    {
        public string Name { get; set; }
        public ICollection<HealthMetricValue> HealthMetricsValuesCollection { get; set; }
    }
}
