using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace A2.Models
{
    public class User
    {
        [Key]
        public string userName { get; set; }
        public string password { get; set; }
        public string address { get; set; }
    }
}
