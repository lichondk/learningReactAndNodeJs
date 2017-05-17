using ASP.NET_Backend.DAl;
using ASP.NET_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Controller
{
   public class BookingController
    {
        public IBooking Dbbooking { get; set; }

        public BookingController(IBooking ibooking)
        {
            Dbbooking = ibooking;            
        }

        public int AddBooking(Booking booking)
        {
            /*for(int i = 0; i<booking.services.Count; i++)
            {
                booking.totalPrice += booking.services[i].price;
                int time = 0;
                time += Convert.ToInt32(booking.services[i].time);
            }*/

            return Dbbooking.AddBooking(booking);
        }

        public BookingTime FindBookingTime(int id)
        {
            return Dbbooking.FindBookingTime(id);
        }

        public Customer FindCustomer(int id)
        {
            return Dbbooking.FindCustomer(id);
        }

        public Hairdresser FindHairdresser(int id)
        {
            return Dbbooking.FindHairdresser(id);
        }

        public Salon FindSalon(int id)
        {
            return Dbbooking.FindSalon(id);
        }

        public Service FindService(int id)
        {
            return Dbbooking.FindService(id);
        }

		public BookingTime CreateBookingTime(BookingTime bt)
		{
			return Dbbooking.CreateBookingTime(bt);
		}

		public List<AllBookings> GetAllBookings()
		{
			return Dbbooking.GetAllBookings();
		}

        public Customer createCustomer(Customer customer)
        {
            return Dbbooking.CreateCustomer(customer);
        }
    }
}
