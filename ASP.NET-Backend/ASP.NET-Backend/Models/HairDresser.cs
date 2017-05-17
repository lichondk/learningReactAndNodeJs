using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP.NET_Backend.Models
{

    public class Hairdresser : Person
    {
        public int hairdresserId { get; set; }
        public string position { get; set; }

        public Hairdresser(string name, string email, string password, string personType, string position) : base(name, email, password,personType)
        {
            this.position = position;
        }
        public Hairdresser()
        {
                
        }

    }
}
