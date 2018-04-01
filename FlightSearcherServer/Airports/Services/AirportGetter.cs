using FlightSearcher.Models;
using System.Collections.Generic;

namespace FlightSearcher.Services
{
    // If this list of airports and flights expands here are things I would consider for scaling this service.
    // * Store airports and flights in a SQL database and query them in GetFlights
    // * Set a max number of flights returned by GetFlights via a method paramater.
    public class AirportGetter : IAirportGetter
    {
        private IEnumerable<Airport> airports;

        public AirportGetter(string filename = @"airports.csv") {
            airports = CsvFileReader.GetRecords<Airport>(filename);
        }

        public IEnumerable<Airport> GetAirports() {
            return airports;
        }
    }
}
