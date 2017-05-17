using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{
   public class Person
    {
        public string personId { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string persontype { get; set; }

        public Person()
        {

        }

        public Person(string name, string email, string password, string personType)
        {
            this.name = name;
            this.email = email;
            this.password = password;
            this.persontype = personType;
        }
    }
  
}
