using System.Numerics;

namespace LifeTrack.Server.Services
{
    public class Range<T>
        where T : IComparable<T>
    {
        public T LowerLimit { 
            get { return lowerLimit; } 
            set {
                if(lowerLimit.CompareTo(upperLimit) <= 0)
                {
                    lowerLimit = value;
                }
            } }
        public T UpperLimit { 
            get { return upperLimit; } 
            set { 
                if(lowerLimit.CompareTo(upperLimit) >= 0)
                {
                    upperLimit = value;
                }
            } }

        private T lowerLimit;
        private T upperLimit;

        public Range(T lowerLimit, T upperLimit)
        {
            LowerLimit = lowerLimit;
            UpperLimit = upperLimit;
        }

        public bool InRange(T value)
        {
            return value.CompareTo(LowerLimit) >= 0 && value.CompareTo(UpperLimit) <= 0;
        }
    }
}
