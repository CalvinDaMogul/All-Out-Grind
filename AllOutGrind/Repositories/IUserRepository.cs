using AllOutGrind.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllOutGrind.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(Guid UserId);
    }
}
