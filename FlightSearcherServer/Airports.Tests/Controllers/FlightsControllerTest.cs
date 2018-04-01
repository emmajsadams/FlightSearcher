using NUnit.Framework;
using System.Collections.Generic;
using FlightSearcher.Controllers;
using FlightSearcher.Models;
using FlightSearcher.Services;

namespace FlightSearcher.Tests.Controllers
{
    [TestFixture]
    public class FlightsControllerTest
    {
        [Test]
        public void ShouldReturnExpectedFlightsFromFlightGetter()
        {
            var sut = new FlightsController();
            var flightGetter = new FlightGetter();
            var fromAirport = "SEA";
            var toAirport = "LAS";
            var sortColumn = FlightSortColumnEnum.FirstClassPrice;
            var sortOrder = FlightSortOrderEnum.Descending;

            var result = sut.Index(fromAirport, toAirport, sortColumn, sortOrder).Data as IEnumerable<Flight>;

            Assert.AreEqual(flightGetter.GetFlights(fromAirport, toAirport, sortColumn, sortOrder), result);
        }

        [Test]
        public void ShouldReturnDefaultFlightsFromFlightGetter()
        {
            var sut = new FlightsController();
            var flightGetter = new FlightGetter();

            var result = sut.Index().Data as IEnumerable<Flight>;

            Assert.AreEqual(flightGetter.GetFlights("", "", FlightSortColumnEnum.Departure, FlightSortOrderEnum.Ascending), result);
        }
    }
}