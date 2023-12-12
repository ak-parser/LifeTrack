using LifeTrack.Server.DataModels;
using LifeTrack.Server.DataModels.Users;
using Newtonsoft.Json;

namespace LifeTrack.Server.Services
{
    public class HealthMetricStandard
    {
        private List<HealthMetricRange> standards;

        public HealthMetricStandard()
        {
            standards = new List<HealthMetricRange>();
            InitializeFromFile();
        }

        private void InitializeFromFile()
        {
            string filePath = "Services\\Data\\HealthMetricStandarts.json";
            string jsonContent = File.ReadAllText(filePath);

            List<HealthMetricRange> ranges = JsonConvert.DeserializeObject<List<HealthMetricRange>>(jsonContent);

            standards.AddRange(ranges);
        }

        private void AddStandard(string metricName, Gender gender, Range<int> ageRange, Range<double> standardRange)
        {
            standards.Add(new HealthMetricRange
            {
                MetricName = metricName,
                Gender = gender,
                AgeRange = ageRange,
                ValueRange = standardRange
            });
        }

        public Range<double> GetStandardRange(string metricName, Gender gender, int age)
        {
            var standard = standards.Find(s => s.MetricName == metricName && s.Gender == gender && age >= s.AgeRange.LowerLimit && age <= s.AgeRange.UpperLimit);

            return standard?.ValueRange;
        }

        public Range<double> GetStandardRange(string metricName, Person person)
        {
            return GetStandardRange(metricName, person.Gender, person.Age);
        }
    }
}
