using ASP.NET_Backend.DAl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ASP.Net_Web_Api.Controllers
{
    public class DefaultController : ApiController
    {
        private ASP.NET_Backend.Controller.BookingController btcr;

        public IHttpActionResult GetEmployee(int id)
        {
            IBooking myDbBooking = new BookingDAL();
            btcr = new ASP.NET_Backend.Controller.BookingController(myDbBooking);
            var hairdresser = btcr.FindHairdresser(3);
            return Ok(hairdresser);

        }
    }
}
