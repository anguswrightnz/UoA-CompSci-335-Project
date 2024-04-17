using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using A2.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace A2.Data
{
    public class A2Repo : IA2Repo
    {
        private readonly A2DbContext _dbContext;

        public A2Repo(A2DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public string Register(User user)
        {
            User existing_user = _dbContext.Users.FirstOrDefault(u => u.userName == user.userName);
            if (existing_user == null)
            {
                EntityEntry<User> entry = _dbContext.Users.Add(user);
                User u = entry.Entity;
                _dbContext.SaveChanges();
                return "User successfully registered.";
            } else
            {
                return $"UserName {user.userName} is not available.";
            }
        }

        public bool ValidLogin(string userName, string password)
        {
            User u = _dbContext.Users.FirstOrDefault(e => e.userName == userName && e.password == password);
            if (u == null)
                return false;
            else
                return true;
        }

        public bool ValidOrganizer(string userName, string password)
        {
            Organizer o = _dbContext.Organizers.FirstOrDefault(e => e.Name == userName && e.Password == password);
            if (o == null)
                return false;
            else
                return true;
        }

        public Product GetProductByID(int id)
        {
            Product p = _dbContext.Products.FirstOrDefault(u => u.Id == id);
            return p;
        }

        public void AddEvent(Event e)
        {
            EntityEntry<Event> entity = _dbContext.Events.Add(e);
            Event newEvent = entity.Entity;
            _dbContext.SaveChanges();
            return;
        }

        public int CountEvents()
        {
            int count = _dbContext.Events.Count();
            return count;
        }

        public Event GetEvent(int id)
        {
            Event e = _dbContext.Events.FirstOrDefault(u => u.Id == id);
            return e;
        }
    }
}
