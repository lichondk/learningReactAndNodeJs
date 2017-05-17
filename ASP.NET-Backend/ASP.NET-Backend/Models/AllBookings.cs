using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{
	public class AllBookings
	{
		public int bookingId { get; set; }
		public double totalPrice { get; set; }
		public string hairdresserName { get; set; }
		public string customerName { get; set; }
		public string date { get; set; }
		public string startTime { get; set; }
		public string serviceType { get; set; }

		public AllBookings(string hairdresserName, string customerName, string date, string startTime, string serviceType, int bookingId, double totalPrice)
		{
			this.hairdresserName = hairdresserName;
			this.customerName = customerName;
			this.date = date;
			this.startTime = startTime;
			this.serviceType = serviceType;
			this.bookingId = bookingId;
			this.totalPrice = totalPrice;
		}	
	}
}