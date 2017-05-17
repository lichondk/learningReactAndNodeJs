using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{
    public class Customer:Person
    {
        public int customerId { get; set; }
        public string phone { get; set; }

        public Customer(string name, string email, string password, string personType,string phone): base(name, email, password, personType)
        {
            this.phone = phone; 
        }

        public Customer()
        {

        }
    }
}
