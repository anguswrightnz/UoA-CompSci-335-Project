using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using A2.Models;

namespace A2.Data
{
    public interface IA2Repo
    {
        public string Register(User user);
        public bool ValidLogin(string userName, string password);
        public bool ValidOrganizer(string userName, string password);
        public Product GetProductByID(int id);
        public void AddEvent(Event e);
        public int CountEvents();
        public Event GetEvent(int id);
        /*public IEnumerable<Customer> GetAllCustomers();
        public bool ValidLogin(string userName, string password);
        public Customer GetCustomerByEmail(string e);*/
    }
}
