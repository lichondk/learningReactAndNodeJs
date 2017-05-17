using ASP.NET_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.DAl
{
    public interface IBooking
    {
        int AddBooking(Booking booking);

        Salon FindSalon(int id);

        BookingTime FindBookingTime(int id);

        Customer FindCustomer(int id);

        Hairdresser FindHairdresser(int id);

        Service FindService(int id);

		BookingTime CreateBookingTime(BookingTime bt);

		List<AllBookings> GetAllBookings();

        Customer CreateCustomer(Customer customer);
    }
}
