using FlightSearcher.Models;
using System.Collections.Generic;

namespace FlightSearcher.Services
{
    public interface IFlightGetter
    {
        IEnumerable<Flight> GetFlights(
            string fromAirport,
            string toAirport,
            FlightSortColumnEnum sortColumn,
            FlightSortOrderEnum sortOrder);
    }
}
