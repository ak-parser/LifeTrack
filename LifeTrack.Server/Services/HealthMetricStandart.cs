using LifeTrack.Server.DataModels;
using LifeTrack.Server.DataModels.Users;

namespace LifeTrack.Server.Services
{
    public class HealthMetricStandard
    {
        private List<HealthMetricRange> standards;

        public HealthMetricStandard()
        {
            standards = new List<HealthMetricRange>();
            InitializeStandards();
        }

        private void InitializeStandards()
        {
            AddStandard("BloodPressure", Gender.Male, new Range<int>(18, 40), new Range<double>(120, 80)); // Норми артеріального тиску для чоловіків віком 18-40 років
            AddStandard("BloodPressure", Gender.Female, new Range<int>(18, 40), new Range<double>(110, 70)); // Норми артеріального тиску для жінок віком 18-40 років
                                                                                                             // Додайте інші стандарти за потребою
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
