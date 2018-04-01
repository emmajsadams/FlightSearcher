using System;

namespace FlightSearcher.Models
{
    public class Airport
    {
        public string Code { get; set; }
        public string Name { get; set; }

        public override bool Equals(Object obj)
        {
            var airport = obj as Airport;

            return airport != null 
                && airport.Code.Equals(this.Code) 
                && airport.Name.Equals(this.Name);
        }
    }
}
