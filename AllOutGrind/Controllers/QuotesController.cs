using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AllOutGrind.Repositories;
using AllOutGrind.Dtos;
using AllOutGrind.DataModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AllOutGrind.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuotesController : ControllerBase
    {

        private readonly Microsoft.Extensions.Logging.ILogger<QuotesController> _logger;
        private readonly IQuoteRepository _repo;

        public QuotesController(ILogger<QuotesController> logger, IQuoteRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Quotes> GetAll()
        {
            return _repo.GetAllQuotes();
        }

        [HttpGet("user/{userId}")]
        public IEnumerable<Quotes> GetUserQuotes(Guid userId)
        {
            return _repo.GetUsersQuote(userId);
        }

        // GET api/<controller>/5
        [HttpGet("{Quoteid}")]
        public IActionResult GetQuote(Guid QuoteId)
        {
            var quote = _repo.GetQuotesById(QuoteId);
            if (quote == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(quote);
            }
        }

        // POST api/<controller>
        [HttpPost]
        public void Create(AddNewQuotesDto newQuotes)
        {
            var repo = new QuoteRepository();
            repo.AddQuotes(newQuotes);
        }

        [HttpPost("{userId}")]
        public void Add(UserQuoteDto newUserQuotes)
        {
            var repo = new QuoteRepository();
            repo.AddQuotesToUser(newUserQuotes);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
