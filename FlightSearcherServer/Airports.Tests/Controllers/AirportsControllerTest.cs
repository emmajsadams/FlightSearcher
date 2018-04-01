using FlightSearcher.Controllers;
using FlightSearcher.Models;
using FlightSearcher.Services;
using NUnit.Framework;
using System.Collections.Generic;

namespace FlightSearcher.Tests.Controllers
{
    [TestFixture]
    public class AirportsControllerTest
    {
        [Test]
        public void ShouldReturnSameFlightsFromFlightGetter()
        {
            var sut = new AirportsController();
            var airportGetter = new AirportGetter();

            var result = sut.Index().Data as IEnumerable<Airport>;

            Assert.AreEqual(airportGetter.GetAirports(), result);
        }
    }
}

