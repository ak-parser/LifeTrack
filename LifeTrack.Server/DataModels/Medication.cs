namespace LifeTrack.Server.DataModels
{
    public class Medication
    {
        public string Name { get; set; }
        public ICollection<ActiveIngredient> ActiveIngredientsCollection { get; set; }
    }
}
