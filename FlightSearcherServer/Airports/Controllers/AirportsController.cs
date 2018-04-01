using System.Web.Mvc;
using FlightSearcher.Services;

namespace FlightSearcher.Controllers
{
    [AllowCrossSiteJson]
    public class AirportsController : Controller
    {
        private IAirportGetter airportGetter; 

        public AirportsController(IAirportGetter airportGetter) {
            this.airportGetter = airportGetter;
        }

        public JsonResult Index() {
            return Json(this.airportGetter.GetAirports(), JsonRequestBehavior.AllowGet);
        }
    }
}
