using ASP.NET_Backend.DAl;
using ASP.NET_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.Models;

namespace WebApi.Controllers
{
    //[EnableCors(origins: "http://localhost:8080", headers: "*", methods: "*")]
    public class RouterController : ApiController
    {

        private ASP.NET_Backend.Controller.BookingController btcr;

        private RouterController()
        {
            IBooking myDbBooking = new BookingDAL();
            btcr = new ASP.NET_Backend.Controller.BookingController(myDbBooking);
        }

        [HttpPost]
        public int AddBooking([FromBody] CreatBooking creatBooking)
            {
            #region mapping
            Customer customer = new Customer()
            {
                email = creatBooking.personEmail,
                name = creatBooking.personName,
                password = creatBooking.personPassword,
                persontype = creatBooking.personType,
                phone = creatBooking.number
            };

            BookingTime bookingTime = new BookingTime()
            {
                date = creatBooking.date_,
                startTime = creatBooking.startTime,
                endTime = creatBooking.endTime
            };

            Booking booking = new Booking()
            {
                totalPrice = Convert.ToDouble(creatBooking.totalprice),
                hairdresserId = creatBooking.hairdressId,
                salonId = creatBooking.salonBookingId,
                customerId =  btcr.createCustomer(customer).customerId,
                bookingTimeId = btcr.CreateBookingTime(bookingTime).bookingTimeId,
                services = creatBooking.services
            };
            #endregion
            return btcr.AddBooking(booking);  
            //return btcr.AddBooking(booking);
        }

        [HttpGet]
        public Customer GetCustomer(int id)
        {
            return btcr.FindCustomer(id);
        }

        [HttpGet]
        public Hairdresser GetHairDresser(int id)
        {
            return btcr.FindHairdresser(id);
        }

        [HttpGet]
        public Salon GetSalon(int id)
        {
            return btcr.FindSalon(id);
        }


        [HttpGet]
        public Service GetService(int id)
        {
            return btcr.FindService(id);
        }


        [HttpGet]
        public BookingTime GetBookingTime(int id)
        {
            return btcr.FindBookingTime(id);
        }

        [HttpPost, HttpPut]
        public BookingTime saveBookingTime([FromBody]BookingTime bookingtime)
        {
            BookingTime result = btcr.CreateBookingTime(bookingtime);
            return result;
        }

		[HttpGet]
		public List<AllBookings> GetAllBookings()
		{
			return btcr.GetAllBookings();
		}
    }
}