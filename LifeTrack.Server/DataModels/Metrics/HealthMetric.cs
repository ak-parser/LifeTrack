namespace LifeTrack.Server.DataModels.Metrics
{
    public class HealthMetric
    {
        public string Name { get; set; }
        public List<HealthMetricValue> HealthMetricsValuesCollection { get; set; } = new();
    }
}
