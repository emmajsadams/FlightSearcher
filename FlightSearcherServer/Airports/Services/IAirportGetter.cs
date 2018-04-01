using FlightSearcher.Models;
using System.Collections.Generic;

namespace FlightSearcher.Services
{
    public interface IAirportGetter
    {
        IEnumerable<Airport> GetAirports();
    }
}
