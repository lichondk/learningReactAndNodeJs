using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{
	public class BookingTime
	{
		public int bookingTimeId { get; set; }
		public string date { get; set; }
		public string startTime { get; set; }
		public string endTime { get; set; }
		public int bookingTimeBookingId { get; set; }
	}
}
