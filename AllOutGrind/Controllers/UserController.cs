using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AllOutGrind.Dtos;
using AllOutGrind.DataModels;
using AllOutGrind.Repositories;
using Microsoft.Exchange.WebServices.Data;

namespace AllOutGrind.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class UserController : FirebaseEnabledController 
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserRepository _repo;

        public UserController(IUserRepository repo)
        {
            _repo = repo;
        }


        // GET: api/User
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("firebaseUid/{firebaseUid}")]
        public IActionResult Get(string firebaseUid)
        {
            var user = _repo.GetUserByFirebaseUid(firebaseUid);
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(user);
            }
        }

        // POST: api/User
        [HttpPost]
        public IActionResult AddUser(AddNewUserDto newUser)
        {
            if (_repo.AddNewUser(newUser))
            {
                return Created($"user/{newUser.Email}", newUser);
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT: api/User/
        [HttpPut("{userId}")]
        public IActionResult EditUser(User editedUser)
        {
            if (_repo.EditUser(editedUser))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}