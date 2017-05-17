using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{
    public class Salon
    {
        public int salonId { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string zipCode { get; set; }
        public string city { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public int salonBookingId { get; set; }
    }
}
