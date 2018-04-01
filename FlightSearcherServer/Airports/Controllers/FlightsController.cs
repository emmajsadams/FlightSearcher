using FlightSearcher.Models;
using FlightSearcher.Services;
using System.Web.Mvc;

namespace FlightSearcher.Controllers
{
    [AllowCrossSiteJson]
    public class FlightsController : Controller
    {
        private FlightGetter flightGetter = new FlightGetter(); 

        public JsonResult Index(
            string from = "", 
            string to = "", 
            FlightSortColumnEnum sortColumn = FlightSortColumnEnum.Departure,
            FlightSortOrderEnum sortOrder = FlightSortOrderEnum.Ascending) {
            return Json(this.flightGetter.GetFlights(from, to, sortColumn, sortOrder), JsonRequestBehavior.AllowGet);
        }
    }
}
