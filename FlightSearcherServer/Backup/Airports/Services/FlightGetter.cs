using FlightSearcher.Models;
using System.Linq;
using System.Collections.Generic;

namespace FlightSearcher.Services
{
    // If this list of airports and flights expands here are things I would consider for scaling this service.
    // * Store airports and flights in a SQL database and query them in GetFlights
    // * Set a max number of flights returned by GetFlights via a method paramater.
    // TODO: Reconsider directory strucutre for getters? Should they be in `Models`?
    public class FlightGetter
    {
        private IEnumerable<Flight> flights;

        public FlightGetter(string filename = @"flights.csv") {
            flights = CsvFileReader.GetRecords<Flight>(filename);
        }

        public IEnumerable<Flight> GetFlights(
            string fromAirport, 
            string toAirport, 
            FlightSortColumnEnum sortColumn, 
            FlightSortOrderEnum sortOrder) {
            var flights = this.flights.Where(f => CompareAiports(f.From, fromAirport) && CompareAiports(f.To, toAirport));

            if (sortColumn == FlightSortColumnEnum.Departure) {
                if (sortOrder == FlightSortOrderEnum.Descending) {
                    return flights.OrderByDescending(flight => flight.Departs);
                }

                return flights.OrderBy(flight => flight.Departs);
            }
            if (sortColumn == FlightSortColumnEnum.MainCabinPrice) {
                if (sortOrder == FlightSortOrderEnum.Descending){
                    return flights.OrderByDescending(flight => flight.MainCabinPrice);
                }

                return flights.OrderBy(flight => flight.MainCabinPrice);
            } else if (sortColumn == FlightSortColumnEnum.FirstClassPrice) {
                if (sortOrder == FlightSortOrderEnum.Descending){
                    return flights.OrderByDescending(flight => flight.FirstClassPrice);
                }

                return flights.OrderBy(flight => flight.FirstClassPrice);
            }

            return flights;
        }

        private bool CompareAiports(string airport1, string airport2) {
            return airport1.ToLower().StartsWith(airport2.ToLower());
        }
    }
}
