using System.Web.Mvc;

public class AllowCrossSiteJsonAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext filterContext)
    {
        // NOTE: In a production app this attribute would only allow company controlled domains
        // For ease of testing this allows any domain in case the ports of the client app or server need to be changed.
        filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
        base.OnActionExecuting(filterContext);
    }
}