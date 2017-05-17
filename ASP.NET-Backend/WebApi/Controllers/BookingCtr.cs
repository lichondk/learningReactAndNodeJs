using ASP.NET_Backend.Controller;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ASP.NET_Backend.Models;

namespace WebApi.Controllers
{
    public class BookingCtr
    {

        private BookingController bCtr = new BookingController();

        public BookingController bCtr;


        public BookingCtr()
        {
            bCtr = new BookingController(); 
        }

      /*  [HttpGet]
        public Customer FindCustomer(int id)
        {
            //var customer = 
            return bCtr.FindCustomer(id = 1);
        }*/
    }
}