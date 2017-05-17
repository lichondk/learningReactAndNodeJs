using ASP.NET_Backend.DAl;
using ASP.NET_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApi.Controllers
{
    public class BookingController : Controller
    {
        private ASP.NET_Backend.Controller.BookingController btcr;
        private Salon salon;
        private Hairdresser hairDresser; 
        // GET: Booking

        public BookingController()
        {
            IBooking myDbBooking = new BookingDAL();
            btcr = new ASP.NET_Backend.Controller.BookingController(myDbBooking);
        }


        [HttpGet]
        public ActionResult Index(int id)
        
        {

            try
            {
                hairDresser= btcr.FindHairdresser(id);
                if (hairDresser != null)
                return View(hairDresser);
                else
                {
                    return View("Error");
                }
            }
            catch (Exception)
            {

                return View("Error");
            }
            
        }
        [HttpGet]
        public ActionResult Salon(int id)     
        {
            try
            {
                salon = btcr.FindSalon(id);
                if (salon != null)
                {
                    return View(salon);
                }
                else
                {
                    return View("Error");
                }
            }
            catch (Exception)
            {

                throw; 
            }     
        }
        public int AddBooking()
        {
            Booking booking = new Booking();
            return btcr.AddBooking(booking);
        }
    }
}