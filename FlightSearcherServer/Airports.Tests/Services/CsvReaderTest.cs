using FlightSearcher.Models;
using FlightSearcher.Services;
using NUnit.Framework;
using System.Collections.Generic;

namespace FlightSearcher.Tests.Models
{   
    [TestFixture]
    public class CsvGetterTest
    {     
        [Test]
        public void ShouldReadCsvAndReturnExpectedRecordsFromTestFile()
        {
            var expected = new List<Airport>() {
                new Airport() { Code = "SEA", Name = "Seattle WA (SEA-Seattle/Tacoma Intl.)" },
                new Airport() { Code = "LAS", Name = "Las Vegas NV (LAS-McCarran Intl.)" }
            };

            var result = CsvFileReader.GetRecords<Airport>(@"airports-test.csv");

            Assert.IsNotEmpty(result);
            Assert.AreEqual(expected, result);
        }
    }
}

