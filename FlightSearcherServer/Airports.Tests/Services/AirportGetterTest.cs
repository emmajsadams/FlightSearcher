using FlightSearcher.Models;
using FlightSearcher.Services;
using NUnit.Framework;

namespace FlightSearcher.Tests.Models
{
    [TestFixture]
    public class AirportGetterTest
    {
        [Test]
        public void ShouldGetAirportsFromFile()
        {
            const string filename = @"airports-test.csv";
            var sut = new AirportGetter(filename);

            var result = sut.GetAirports();
            var expected = CsvFileReader.GetRecords<Airport>(filename);

            Assert.IsNotEmpty(result);
            Assert.AreEqual(expected, result);
        }
    }
}

