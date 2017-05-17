using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{
    public class Service
    {
        public int serviceId { get; set; }
        public string serviceType { get; set; }
        public string time { get; set; }
        public double price { get; set; }
       // public List<Booking> bookings { get; set; }
    }
}
