using System.Web.Mvc;
using FlightSearcher.Services;

namespace FlightSearcher.Controllers
{
    [AllowCrossSiteJson]
    public class AirportsController : Controller
    {
        private AirportGetter airportGetter = new AirportGetter(); 

        public JsonResult Index() {
            return Json(this.airportGetter.GetAirports(), JsonRequestBehavior.AllowGet);
        }
    }
}
