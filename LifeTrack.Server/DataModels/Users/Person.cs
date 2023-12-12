using System.Net.Cache;
using System.Reflection;

namespace LifeTrack.Server.DataModels.Users
{
    public class Person
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        public string Email { get; set; }
        public Gender Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public int Age() {
            return DateTime.Now.Year - BirthDate.Year; 
        }
    }
}
