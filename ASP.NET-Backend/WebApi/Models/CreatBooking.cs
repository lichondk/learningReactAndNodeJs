using ASP.NET_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class CreatBooking
    {
        public string personName { get; set; }
        public string personEmail { get; set; }
        public string personPassword { get; set; }
        public string personType { get; set; }
        public string number { get; set; }
        public string date_ { get; set; }
        public string startTime { get; set; }
        public string endTime { get; set; }
        public string totalprice { get; set; }
        public int hairdressId { get; set; }
        public int customerId { get; set; }
        public int salonBookingId {get; set;}
        public int bookingTimeBookingId { get; set; }
        public List<Service> services { get; set; }

        public CreatBooking()
        {
            services = new List<Service>();
        }




    }
}