using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{
	public class Booking
	{
		public int bookingId { get; set; }
		public double totalPrice { get; set; }
		public int customerId { get; set; }
		public int hairdresserId { get; set; }
        public int salonId { get; set;}
        public List<Service> services { get; set; }
        public int bookingTimeId { get; set; }

        public Booking()
        {
            services = new List<Service>(); 
        }
    }
  
}
