using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllOutGrind.Repositories
{
    public class IUserRepository
    {
        public string Email { get; set; }
        public string FirebaseUid { get; set; }
    }
}
