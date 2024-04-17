using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using A2.Data;
using A2.Dtos;
using A2.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace A2.Controllers
{
    [Route("webapi")]
    [ApiController]
    public class A2Controller : Controller
    {
        private readonly IA2Repo _repository;

        public A2Controller(IA2Repo repository)
        {
            _repository = repository;
        }

        /* ENDPOINT 1 */
        [HttpPost("Register")]
        public ActionResult<string> Register(User user)
        {
            User u = new User { userName = user.userName, password = user.password, address = user.address };
            string outcome = _repository.Register(u);

            return Ok(outcome);
        }

        /* ENDPOINT 2 */
        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "UserOnly")]
        [HttpGet("PurchaseItem/{id}")]
        public ActionResult<PurchaseOutput> PurchaseItem(int id)
        {
            ClaimsIdentity identity = HttpContext.User.Identities.FirstOrDefault();
            Claim claim = identity.FindFirst("user");
            if (claim == null) { return StatusCode(403); }
            string user = claim.Value;
            Product product = _repository.GetProductByID(id);
            if (product == null) { return BadRequest($"Product {id} not found"); }
            else
            {
                PurchaseOutput purchaseOutput = new PurchaseOutput { productID = id, userName = user };
                return Ok(purchaseOutput);
            }
        }

        /* ENDPOINT 3 */
        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "OrganizerOnly")]
        [HttpPost("AddEvent")]
        public ActionResult AddEvent(EventInput eventIn)
        {
            ClaimsIdentity identity = HttpContext.User.Identities.FirstOrDefault();
            Claim claim = identity.FindFirst("organizer");
            if (claim == null) { return StatusCode(403); }
            DateTime start, end;
            try
            {
                start = DateTime.ParseExact(eventIn.Start, "yyyyMMddTHHmmssZ", System.Globalization.CultureInfo.InvariantCulture);
            }
            catch (FormatException)
            {
                try
                {
                    end = DateTime.ParseExact(eventIn.End, "yyyyMMddTHHmmssZ", System.Globalization.CultureInfo.InvariantCulture);
                }
                catch (FormatException)
                {
                    return BadRequest("The format of Start and End should be yyyyMMddTHHmmssZ.");
                }
                return BadRequest("The format of Start should be yyyyMMddTHHmmssZ.");
            }
            try
            {
                end = DateTime.ParseExact(eventIn.End, "yyyyMMddTHHmmssZ", System.Globalization.CultureInfo.InvariantCulture);
            }
            catch (FormatException)
            {
                return BadRequest("The format of End should be yyyyMMddTHHmmssZ.");
            }
            Event e = new Event { Start = eventIn.Start, End = eventIn.End, Summary = eventIn.Summary, Description = eventIn.Description, Location = eventIn.Location };
            _repository.AddEvent(e);
            return Ok("Success");
        }

        /* ENDPOINT 4 */
        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "AuthOnly")]
        [HttpGet("EventCount")]
        public ActionResult<int> CountEvents()
        {
            return _repository.CountEvents();
        }

        /* ENDPOINT 5 */
        [Authorize(AuthenticationSchemes = "Authentication")]
        [Authorize(Policy = "AuthOnly")]
        [HttpGet("Event/{id}")]
        public ActionResult Event(int id)
        {
            Event e = _repository.GetEvent(id);
            if (e == null) { return BadRequest($"Event {id} does not exist."); }
            Response.Headers.Add("Content-Type", "text/calendar");
            return Ok(e);
        }

        /*
                // GET api/ViewCustomer
                [Authorize(AuthenticationSchemes = "MyAuthentication")]
                [Authorize(Policy = "UserOnly")]
                [HttpGet("ViewCustomer")]
                public ActionResult<CustomerOutputDto> ViewCustomer()
                {
                    ClaimsIdentity ci = HttpContext.User.Identities.FirstOrDefault();
                    Claim c = ci.FindFirst("userName");
                    string email = c.Value;
                    Customer customer = _repository.GetCustomerByEmail(email);
                    CustomerOutputDto cOut = new CustomerOutputDto { FirstName = customer.FirstName, LastName = customer.LastName, Email = customer.Email, Password = customer.Password };
                    return Ok(cOut);
                }

                // GET api/ListAllCustomers
                [Authorize(AuthenticationSchemes = "AdminAuthentication")]
                [Authorize(Policy = "AdminOnly")]
                [HttpGet("ListAllCustomers")]
                public ActionResult<IEnumerable<CustomerOutputDto>> ListAllCustomers()
                {
                    IEnumerable<Customer> customers = _repository.GetAllCustomers();
                    IEnumerable<CustomerOutputDto> cOut = customers.Select(e => new CustomerOutputDto { FirstName = e.FirstName, LastName = e.LastName, Email = e.Email, Password = e.Password });
                    return Ok(cOut);
                }*/
    }
}
