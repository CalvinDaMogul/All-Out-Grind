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
    [ApiController]
    public class UserController : ControllerBase 
    {
        private readonly ILogger<UserController> _logger;
        private readonly UserRepository _repo;

        public UserController(UserRepository repo)
        {
            
            _repo = repo;
        }


        // GET: api/User
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return _repo.GetAllUsers();
        }

        [HttpGet("User/{Email}")]
        public IActionResult Get(string Email)
        {
            var user = _repo.GetUserByEmail(Email);
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
        //[HttpPost]
        //public IActionResult AddUser(AddNewUserDto newUser)
        //{
        //    if (_repo.AddNewUser(newUser))
        //    {
        //        return Created($"user/{newUser.Email}", newUser);
        //    }
        //    else
        //    {
        //        return BadRequest();
        //    }
        //}

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