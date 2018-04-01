using CsvHelper;
using FlightSearcher.Models;
using System.Linq;
using System.Collections.Generic;
using System.IO;

namespace FlightSearcher.Services
{
    public class CsvFileReader
    {
        public static IEnumerable<T> GetRecords<T>(string fileName) {
            var filename = Path.Combine(Directory.GetCurrentDirectory(), @"Content", fileName);
            using (TextReader reader = File.OpenText(filename))
            {
                return new CsvReader(reader).GetRecords<T>().ToList();
            }
        }
    }
}
