using System;

namespace FlightSearcher.Models
{
    public class Flight 
    {   
        public string From { get; set; }
        public string To { get; set; }
        public int FlightNumber { get; set; }
        public DateTime Departs { get; set; }
        public DateTime Arrives { get; set; }
        public decimal MainCabinPrice { get; set; }
        public decimal FirstClassPrice { get; set; }

        public override bool Equals(Object obj)
        {
            var flight = obj as Flight;

            return flight != null 
                && flight.From.Equals(this.From)
                && flight.To.Equals(this.To)
                && flight.FlightNumber.Equals(this.FlightNumber)
                && flight.Departs.Equals(this.Departs)
                && flight.Arrives.Equals(this.Arrives)
                && flight.MainCabinPrice.Equals(this.MainCabinPrice)
                && flight.FirstClassPrice.Equals(this.FirstClassPrice);
        }
    }
}
