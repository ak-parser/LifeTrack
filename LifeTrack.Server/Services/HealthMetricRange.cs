using LifeTrack.Server.DataModels;

namespace LifeTrack.Server.Services
{
    internal class HealthMetricRange
    {
        public string MetricName { get; set; }
        public Gender Gender { get; set; }
        public Range<int> AgeRange { get; set; }
        public Range<double> ValueRange { get; set; }
    }
}
