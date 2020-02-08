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

        [HttpGet("{userId}")]
        public User Get(Guid userId)
        {
            var repo = new UserRepository();
            var user = repo.GetUser(userId);
            return user;
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
        [HttpPut("{id}")]
        public void Update(UpdateUserDto updatedUserCommand, Guid id)

        {
            var repo = new UserRepository();
            var updatedUser = new User
            {
                FirstName = updatedUserCommand.FirstName,
                LastName = updatedUserCommand.LastName,
                Email = updatedUserCommand.Email,

            };
            repo.updatedUser(updatedUser, id);

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
        }
    }
}