using FlightSearcher.Models;
using FlightSearcher.Services;
using NUnit.Framework;
using System.Linq;

namespace FlightSearcher.Tests.Services
{
    [TestFixture]
    public class FlightGetterTest
    {
        private static string FromAirport = "SEA";
        private static string ToAirport = "LAX";

        [Test]
        public void ShouldSortFlightsWithCaseInsensitiveAirportMatch()
        {
            var sut = new FlightGetter(@"flights-test.csv");

            var result = sut.GetFlights(FromAirport, ToAirport, FlightSortColumnEnum.Departure, FlightSortOrderEnum.Ascending);
            var expected = sut.GetFlights(FromAirport.ToLower(), ToAirport.ToLower(), FlightSortColumnEnum.Departure, FlightSortOrderEnum.Ascending);

            Assert.IsNotEmpty(result);
            Assert.IsNotEmpty(expected);
            Assert.AreEqual(result, expected);
        }

        [Test]
        public void ShouldGetFlightsWithStartsWithMatchOnAirports()
        {
            var sut = new FlightGetter(@"flights-test.csv");
            var partialFromAirport = "SE";
            var partialToAirport = "LA";

            var result = sut.GetFlights(partialFromAirport, partialToAirport, FlightSortColumnEnum.Departure, FlightSortOrderEnum.Ascending);

            Assert.IsNotEmpty(result);
            Assert.IsTrue(result.All(flight => flight.From.StartsWith(partialFromAirport)));
            Assert.IsTrue(result.All(flight => flight.To.StartsWith(partialToAirport)));
        }

        [Test]
        public void ShouldSortFlightsAscendingByDeparture()
        {
            var sut = new FlightGetter(@"flights-test.csv");

            var result = sut.GetFlights(FromAirport, ToAirport, FlightSortColumnEnum.Departure, FlightSortOrderEnum.Ascending);

            Assert.IsNotEmpty(result);
            Assert.AreEqual(result.OrderBy(flight => flight.Departs), result);
        }

        [Test]
        public void ShouldSortFlightsDescendingByDeparture()
        {
            var sut = new FlightGetter(@"flights-test.csv");

            var result = sut.GetFlights(FromAirport, ToAirport, FlightSortColumnEnum.Departure, FlightSortOrderEnum.Descending);

            Assert.IsNotEmpty(result);
            Assert.AreEqual(result.OrderByDescending(f => f.Departs), result);
        }

        [Test]
        public void ShouldSortFlightsAscendingByMainCabinPrice()
        {
            var sut = new FlightGetter(@"flights-test.csv");

            var result = sut.GetFlights(FromAirport, ToAirport, FlightSortColumnEnum.MainCabinPrice, FlightSortOrderEnum.Ascending);

            Assert.IsNotEmpty(result);
            Assert.AreEqual(result.OrderBy(f => f.MainCabinPrice), result);
        }

        [Test]
        public void ShouldSortFlightsDescendingByMainCabinPrice()
        {
            var sut = new FlightGetter(@"flights-test.csv");

            var result = sut.GetFlights(FromAirport, ToAirport, FlightSortColumnEnum.MainCabinPrice, FlightSortOrderEnum.Descending);

            Assert.IsNotEmpty(result);
            Assert.AreEqual(result.OrderByDescending(f => f.MainCabinPrice), result);
        }

        [Test]
        public void ShouldSortFlightsAscendingByFirstClassPrice()
        {
            var sut = new FlightGetter(@"flights-test.csv");

            var result = sut.GetFlights(FromAirport, ToAirport, FlightSortColumnEnum.FirstClassPrice, FlightSortOrderEnum.Ascending);

            Assert.IsNotEmpty(result);
            Assert.AreEqual(result.OrderBy(f => f.FirstClassPrice), result);
        }

        [Test]
        public void ShouldSortFlightsDescendingByFirstClassPrice()
        {
            var sut = new FlightGetter(@"flights-test.csv");

            var result = sut.GetFlights(FromAirport, ToAirport, FlightSortColumnEnum.FirstClassPrice, FlightSortOrderEnum.Descending);

            Assert.IsNotEmpty(result);
            Assert.AreEqual(result.OrderByDescending(f => f.FirstClassPrice), result);
        }
    }
}

